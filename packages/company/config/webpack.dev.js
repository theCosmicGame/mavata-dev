const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');
const path = require('path');
const globals = require('../src/variables/global')
const port = globals.port

const devConfig = {
  mode: 'development',
  output: {
    publicPath: `http://localhost:${port}/`,   // don't forget the slash at the end
  },
  devServer: {
    port: port,
    historyApiFallback: {
      index: 'index.html',
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'companyMod',
      filename: 'remoteEntry.js',
      exposes: {
        './CompanyApp': './src/bootstrap',
      },
      shared: {...packageJson.dependencies, ...packageJson.peerDependencies},
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
