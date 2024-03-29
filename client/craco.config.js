const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.resolve.plugins.push(new TsconfigPathsPlugin({ configFile: './tsconfig.json' }));
      return webpackConfig;
    },
  },
};