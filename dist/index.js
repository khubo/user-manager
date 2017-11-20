'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _winston = require('winston');

var _winston2 = _interopRequireDefault(_winston);

var _bodyParser = require('body-parser');

var _db = require('./db');

var _db2 = _interopRequireDefault(_db);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

var _authorization = require('./controllers/authorization');

var _authorization2 = _interopRequireDefault(_authorization);

var _authorization3 = require('./middlewares/authorization');

var _authorization4 = _interopRequireDefault(_authorization3);

var _logger = require('./middlewares/logger');

var _logger2 = _interopRequireDefault(_logger);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var port = process.env.PORT || 1337;

// middlewares
app.use((0, _bodyParser.json)({ limit: '2mb' }));
app.use(_logger2.default);

// routes
app.get('/', function (req, res) {
  res.send('Impatience is a vice young Jedi');
});
app.post('/authorize', _authorization2.default);
app.use('/api', [_authorization4.default], _routes2.default);

// knex migration
_db2.default.migrate.latest();

// start db
app.listen(port, function () {
  _winston2.default.info('App started listening on port ' + port);
});