const { merge } = require("webpack-merge")

const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")
const commonConfig = require("./webpack.common")
const packageJson = require("../package.json")

const devConfig = {
  mode: "development",
  devServer: {
    port: 8081,
    historyApiFallback: true
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "marketingApp",
      filename: "remoteEntry.js",
      exposes: {
        "./MarketingApp": "./src/bootstrap.js",
      },
      shared: packageJson.dependencies,
    }),
  ],
}

module.exports = merge(commonConfig, devConfig)
