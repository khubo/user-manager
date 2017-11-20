'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _winston = require('winston');

var _winston2 = _interopRequireDefault(_winston);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var port = process.env.PORT || 1337;

// routes
app.get('/', function (req, res) {
  res.end('oye, port working fine!');
});

app.listen(port, function () {
  _winston2.default.log('App started listening port ' + port);
});