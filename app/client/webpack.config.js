const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
   entry: './src/index.js',
   output: {
     path: path.resolve("./build/"),
     filename: "bundle.js",
   },
   target: "web",
   name: "client-bundler",
   module: {
     rules: [
       {
         test: /\.(js|jsx)$/i,
         use: ["babel-loader"],
         exclude: /node_modules/,
       },
       {
         test: /\.css$/i,
         include:[/node_modules/,path.resolve('src','styles','index.css'),path.resolve('src','assets')],
         use: [
           "style-loader",
           {
             loader: "css-loader",
             options: {
               sourceMap: false,
               import: true,
               modules:false,
             },
           },
           "postcss-loader"
         ],
       },
       {
         test: /\.module\.css$/i,
         exclude:[/node_modules/,path.resolve('src','styles','index.css'),path.resolve('src','assets')],
         use: [
           "style-loader",
           {
             loader: "css-loader",
             options: {
               importLoaders: 1,
               esModule: false, //esmodule doesn't work with isomorphic style loader
               sourceMap: false,
               import: true,
               modules: {
                 localIdentName: "[local]__[hash:base64:5]",
               },
             },
           },
           "postcss-loader",
         ],
       },
       {
         test: /\.(png|jpg|jpeg|gif|tif|ico)$/i,
         use: ["url-loader"],
       },
       {
         test: /\.svg/,
         use: ["svg-url-loader"],
       },
     ],
   },
   plugins:[
      // new HtmlWebpackPlugin({
      //    template:path.resolve(__dirname,'src','index.html'),
      //    inject:'body'
      // })
  ],
   devServer: {
     compress: true,
     hot: true,
     liveReload: true,
     contentBase: [
       path.join("./public"),
       path.join('./build'),
     ],
     watchContentBase: true,
     historyApiFallback: true,
   },
   resolve: {
     extensions: ["*", ".js", ".jsx"],
   },
}