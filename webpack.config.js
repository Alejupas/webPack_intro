const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
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
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "This is dynamic Webpack Title",
      template: "src/js/template.html",
    }),
  ],
};
