const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  devtool: "none", //kai sukompiliuojam, main bundle kad geriau suprasti koda
  entry: {
    //nurodom musu programos pagrindini js faila
    //ivesties laukas
    main: path.resolve(__dirname, "./src/app.js"),
  },
  output: {
    // isvesties laukas - is entry bus paimta ir ideta i output
    filename: "main.bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/i, //pritaikom taisykle tik *.css failams
        //TODO: production env MiniCssExtractPlugin
        use: ["style-loader", "css-loader"], //perdarom .css failus i dist folder
      },
      {
        test: /\.js$/, //.js
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            //kokio senumo js paversti veikianciu in older browsers
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "This is dynamic Webpack Title",
      template: "src/js/template.html",
    }),
  ],
};
