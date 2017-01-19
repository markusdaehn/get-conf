const DEFAULT_CONFIG_NAME = 'default';
const DEFAULT_CONFIG_DIR = 'config';
const configs = {};
const nullableLogger = {
  error: () => {},
  debug: () => {},
  warn: () => {},
  trace: () => {},
  info: () => {}
};

module.exports = function getConfig(applyDefaults, getEnvConfig, deepMerge, path, envVars, cwd, options) {
  let { logger, configPath } = normalize(path, cwd, options);

  try {
    if(configs[configPath]) return configs[configPath];

    envVars = applyDefaults(logger, envVars, configPath);

    let baseConfig = getEnvConfig(logger, envVars, configPath, DEFAULT_CONFIG_NAME);
    let envConfig = getEnvConfig(logger, envVars, configPath, envVars.NODE_ENV || baseConfig.appName || 'application');

    return configs[configPath] = deepMerge(baseConfig, envConfig);
  } catch(e) {
    logger.info({exception: e}, 'server.config.create: error finding config');
  }

  return configPath ? configs[configPath] = {} : {};
}

function normalize(path, cwd, options) {
  let logger = nullableLogger, configPath = path.join(cwd, DEFAULT_CONFIG_DIR);

  if(typeof options === 'string') {
    configPath = options;
  } else if(typeof options === 'object') {
    if(options.logger) logger = options.logger;
    if(options.path) configPath = options.path;
  }

  return { logger, configPath };
}
