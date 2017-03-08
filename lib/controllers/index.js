'use strict';
exports.login = require('./actions/login');
exports.logout = require('./actions/logout');
exports.register = require('./actions/register');

exports.extras = {
  reset: require('./actions/reset'),
  validate: require('./actions/validate')
};
