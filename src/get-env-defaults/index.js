const R = require('ramda');
const path = require('path');
const getEnvDefaults = require('./get-env-defaults');

module.exports = R.curry(getEnvDefaults)(require, path.join, Object.freeze);
module.exports.__getEnvDefaults = getEnvDefaults;
