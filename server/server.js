var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var serveIndex = require('serve-index');
var serveStatic = require('serve-static');

var PORT = process.env.PORT || 3333;

global.APP = app;

// Server intialization
exports.start = function () {

    // Cors
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(allowCrossDomain);

    app.use('/', serveStatic('app'));

    app.listen(PORT, function () {

        console.log('Server running on port:' + PORT);

    });

};

var allowCrossDomain = function (req, res, next) {

    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();

};