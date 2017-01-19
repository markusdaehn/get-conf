const R = require('ramda');
const path = require('path');

const getEnvConfig = require('./get-env-config');

module.exports = R.curry(getEnvConfig)(require, path.join);
module.exports.__getEnvConfig = getEnvConfig;
