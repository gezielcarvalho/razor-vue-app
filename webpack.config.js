// webpack.config.js
const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./wwwroot/js/main.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "wwwroot/dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-env"],
        },
      },
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: "./wwwroot/js/index.html",
      filename: "index.html",
    }),
  ],
  resolve: {
    alias: {
      vue: "vue/dist/vue.esm-bundler.js",
    },
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "wwwroot/dist"),
    },
    compress: true,
    port: 9000,
    hot: true,
    headers: {
      "Access-Control-Allow-Origin": "*", // Allow cross-origin requests
    },
    proxy: [
      {
        context: ["/api"], // Proxy API requests to .NET backend
        target: "http://localhost:5167",
        changeOrigin: true,
      },
    ],
  },
};
