const R = require('ramda');
const path = require('path');
const getEnvConfig = require('./get-env-config');
const getDefaults = R.curry(require('./get-env-defaults'))(require, path.join, Object.freeze);
const applyDefaults = R.curry(require('./apply-env-defaults'))(getDefaults, Object.assign, Object.keys, Object.freeze);
const deepMerge = require('deep-extend');
const getConfig = require('./get-config');

module.exports = R.curry(getConfig)(applyDefaults, getEnvConfig, deepMerge, path, process.env, process.cwd());
module.exports.__getConfig = getConfig;
