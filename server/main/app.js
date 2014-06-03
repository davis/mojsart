"use strict";

var express = require('express');
var app = express();
var routers = {};
var SongRouter = express.Router();

routers.SongRouter = SongRouter;

require('./config.js')(app, express, routers);

require('../song/song_routes.js')(SongRouter);

// require('./cronjob.js')();
require('./demoInit.js')();

module.exports = exports = app;
