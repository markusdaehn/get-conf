const R = require('ramda');
const path = require('path');
const getEnvConfig = require('./get-env-config');
const applyDefaults = require('./apply-env-defaults');
const deepMerge = require('deep-extend');

const getConfig = require('./get-config');

module.exports = R.curry(getConfig)(applyDefaults, getEnvConfig, deepMerge, path.join, process.env, process.cwd());
module.exports.__getConfig = getConfig;
