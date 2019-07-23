const Joi = require('joi');

exports.validate = (data, schema) => {
    return new Promise(async (resolve, reject) => {
        const result = Joi.validate(data, schema);
        if (result.error === null) {
            resolve(true);
        } else {
            reject(result);
        }
    })
}
