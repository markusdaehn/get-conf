module.exports = function getEnvConfig(getModule, joinPath, logger, envVars, configPath, configName) {
  if (!configName) {
    logger.info('The config name was missing', 'get-conf');
    return {};
  }

  try {
    let configFile = joinPath(configPath, 'environment', configName);
    let config = getModule(configFile);

    return typeof config === 'function' ? config(envVars, logger) : config;
  } catch(e) {
    logger.info({exception: e}, 'get-conf');
  }

  return {};
}
