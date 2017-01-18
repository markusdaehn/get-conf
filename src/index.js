const R = require('ramda');
const path = require('path');
const getEnvConfig = R.curry(require('./get-env-config'))(require, path.join);
const getDefaults = R.curry(require('./get-env-defaults'))(require, path.join, Object.freeze);
const applyDefaults = R.curry(require('./apply-env-defaults'))(getDefaults, Object.assign, Object.keys, Object.freeze);
const deepMerge = require('deep-extend');

module.exports = R.curry(require('./get-config'))(applyDefaults, getEnvConfig, deepMerge, process.env)
