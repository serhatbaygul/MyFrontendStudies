var path = require("path");
var webpack = require("webpack");
module.exports = {
  entry: ["@babel/polyfill", "./src/index..js"],
  output: {
    path: path.resolve(__dirname, "bundles"),
    filename: "bundle.js",
  },
  mode: "development",

  module: {
    rules: [
      {
        test: /\.s$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presents: ["@babel/present-env"],
          },
        },
      },
    ],
  },
};
