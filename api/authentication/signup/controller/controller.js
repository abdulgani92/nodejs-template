const Joi = require('joi');
const validator = require('./../../../../validator/validator');
const UserModel = require('./../model/model');
const logger = require('./../../../../logger/logger');

const schema = Joi.object().keys({
    username: Joi.string().min(3).max(20).required(),
    email: Joi.string().required(),
    password: Joi.string().min(6).max(30).required()
});


exports.createAccount = async (req, res) => {
    var valid = false;
    try {
        valid = await validator.validate(req.body || {}, schema);
    } catch (err) {
        logger.log(err.error.details[0].message);
        return res.status(400).send({
            success: false,
            name: err.error.name,
            message: err.error.details[0].message,
            statusCode: 400
        });
    }

    if (valid) {
        let user = {};
        user.username = req.body.username;
        user.email = req.body.email;
        user.password = req.body.password;

        let newUser = new UserModel(user);
        try {
            let result = await newUser.save();
            result.message = 'Account created successfully';
            result.statusCode = 200;
            result.success = true;
            res.send(result);
        } catch (err) {
            err.sucess = false;
            err.statusCode = 500;
            err.message = err.errmsg;
            delete err.errmsg;
            res.status(500).send(err);
        }
    } else {
        res.status(400).send({
            success: false,
            message: 'Bad Request',
            statusCode: 400
        });
    }
}
