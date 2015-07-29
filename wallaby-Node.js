module.exports = function (wallaby) {
  process.env.NODE_PATH = require('path').join(wallaby.localProjectDir, 'node_modules');
  process.env.localProjectDir = wallaby.localProjectDir

  console.log('[in Wallaby-Node] ');

  return {
    files:  ['test-node/src/**/*.coffee'],

    tests: ['test-node/test/**/*.coffee'],

    env: {
      type: 'node',
    }
  };
};