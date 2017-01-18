const { assert } = require('chai');
const path = require('path');
const getEnvConfig = require('./get-env-config');

describe('config get-env-config -- integration', () => {
  const configPath = path.resolve(__dirname, '../test/scenarios/basic/config');
  ['production', 'development', 'test'].forEach((env) => {
    context(`when calling get-env-config with '${env}'`, () => {
      it(`should return an object with a property config.env equal to '${env}'`, () => {
        let logger = createLogger();
        let config = getEnvConfig(require, path.join, logger, {}, configPath, env);

        assert.equal(config.env, env, 'The config did not have the correct environment');
      });
    });
  });
});

function createLogger() {
  return {
    error: () => {},
    warn: () => {},
    info: () => {},
    trace: () => {},
  };
}
