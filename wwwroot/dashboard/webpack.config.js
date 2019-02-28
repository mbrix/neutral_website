const path = require("path")
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")
const glob = require("glob")

module.exports = {
  resolve: {
    modules: [path.join(__dirname, 'node_modules')],
  },
  entry: {
    "bundle.js": glob.sync("build/static/?(js|css)/*.?(js|css)").map(f => path.resolve(__dirname, f)),
  },
  output: {
    path: path.resolve(__dirname, '../js'),
    filename: "dashboard.min.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [new UglifyJsPlugin()],
}
