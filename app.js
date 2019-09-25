const express = require('express');
const app = express();
const logger = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const helmet = require('helmet');

var secret = require('./config/secret');

const commentRoutes = require('./api/routes/coments');
const emailRoutes = require('./api/routes/emailSend');

mongoose.connect(secret.database, {
    useNewUrlParser: true
});

app.set('view engine', 'ejs');
app.use(logger('dev'));
// not sure about this guy, i'll take him off soon
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(helmet());
app.use(cors());

//ROUTES
app.use('/comment', [commentRoutes]);
app.use('/send-email', [emailRoutes]);

//error handling
app.use((req, res, next) => {
    const error = new  Error('Not found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            messae: error.message
        }
    });
});

module.exports = app;