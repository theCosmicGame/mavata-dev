const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');
const globals = require('../src/variables/global');
const port = globals.port;

const devConfig = {
  mode: 'development',
  output: {
    publicPath: `http://localhost:${port}/`   // don't forget the slash at the end
  },
  devServer: {
    port: port,
    historyApiFallback: {
      index: 'index.html',
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        marketingMfe: 'marketingMod@http://localhost:8081/remoteEntry.js',
        authMfe: 'authMod@http://localhost:8082/remoteEntry.js',
        companyMfe: 'companyMod@http://localhost:8083/remoteEntry.js',
      },
      shared: {...packageJson.dependencies, ...packageJson.peerDependencies},
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
