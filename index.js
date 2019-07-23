const bodyParser = require('body-parser');
const config = require('config');
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const PORT = 3000;

//Connecting to the MongoDB
const userName = config.get('db.username');
const password = config.get('db.password');
mongoose.connect(`mongodb://${userName}:${password}@ds347367.mlab.com:47367/nodejs-template`, { useCreateIndex: true,
useNewUrlParser: true });

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use('/', require('./api/authentication/signup/router/router'));

app.listen(PORT, () => {
    console.log(`Server Started at PORT = ${PORT}`);
});