const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');
const globals = require('../src/variables/global')
const port = globals.port

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
      name: 'marketingMod',
      filename: 'remoteEntry.js',
      exposes: {
        './MarketingApp': './src/bootstrap',
        './FooterApp': './src/components/footer/Footer',
      },
      shared: {...packageJson.dependencies, ...packageJson.peerDependencies},
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
