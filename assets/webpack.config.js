const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  /*入口*/
  entry: path.join(__dirname, "src/index.js"),
  plugins: [
    // Generates an `index.html` file with the <script> injected.
    new HtmlWebpackPlugin({
      inject: true,
      template: path.join(__dirname, "public", "index.html"),
      favicon: "./public/favicon.ico"
    })
  ],

  /*输出到dist文件夹，输出文件名字为bundle.js*/
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js"
  },
  devServer: {
    // contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 3001
  },

  module: {
    rules: [
      {
        test: /(\.es6|\.js|\.jsx)$/,
        // exclude: /node_modules/,
        include: path.join(__dirname, "src"),
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        loader: ["style-loader", "css-loader"]
      },
      {
        test: /\.html$/,
        loader: "html-loader"
      }
    ]
  }
};
