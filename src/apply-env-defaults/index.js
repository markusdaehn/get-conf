const R = require('ramda');
const path = require('path');
const getEnvDefaults = require('../get-env-defaults');

const applyDefaults = require('./apply-env-defaults');

module.exports = R.curry(applyDefaults)(getEnvDefaults, Object.assign, Object.keys, Object.freeze);
module.exports.__applyDefaults = applyDefaults;
