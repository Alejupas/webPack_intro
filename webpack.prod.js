const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

module.exports = {
  mode: "production",
  // devtool: "source-map", //kai sukompiliuojam, main bundle kad geriau suprasti koda

  entry: {
    //nurodom musu programos pagrindini js faila
    //ivesties laukas
    main: path.resolve(__dirname, "./src/app.js"),
  },
  output: {
    // isvesties laukas - is entry bus paimta ir ideta i output
    filename: "final.bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    assetModuleFilename: "images/[name][ext]", //nurodome kur bus imgs padeti
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.css$/i, //pritaikom taisykle tik *.css failams
        //TODO: production env MiniCssExtractPlugin
        use: [MiniCssExtractPlugin.loader, "css-loader"], //perdarom .css failus i dist folder
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
    new ImageMinimizerPlugin({
      filename: "images/[name].webp",
      deleteOriginalAssets: true,
      minimizerOptions: {
        plugins: [
          // ["imagemin-webp"],
          ["svgo"],
          ["gifsicle"],
          ["pngquant", { quality: [0.3, 0.6] }],
          ["mozjpeg", { quality: 70 }],
        ],
      },
    }),
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
    new HtmlWebpackPlugin({
      title: "This is dynamic Webpack Title",
      template: "src/js/template.html",
    }),
  ],
};
