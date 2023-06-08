const { merge } = require("webpack-merge")

const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")
const commonConfig = require("./webpack.common")
const packageJson = require("../package.json")

const devConfig = {
  mode: "development",
  output: {
    publicPath: "http://localhost:8083/",
  },
  devServer: {
    port: 8083,
    historyApiFallback: true
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "dashboardApp",
      filename: "remoteEntry.js",
      exposes: {
        "./dashboardApp": "./src/bootstrap.js",
      },
      shared: packageJson.dependencies,
    }),
  ],
}

module.exports = merge(commonConfig, devConfig)
