const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

module.exports = {
  mode: "production",
  // devtool: "source-map", // kad kai sukompiliujam development eitu geriau suprasti koda
  entry: {
    //   nurodom musu programos pagrindini js faila
    main: path.resolve(__dirname, "./src/app.js"),
  },
  output: {
    filename: "final.bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    assetModuleFilename: "images/[hash][ext]", // nurodome kur bus padeti musu paveiksleliai
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.css$/i, // pritaikom taisykle tik *.css failams
        // TODO: production env MiniCssExtractPlugin
        use: [MiniCssExtractPlugin.loader, "css-loader"], // perdarom .css failus i dist folderi
      },
      {
        test: /\.js$/, // .js
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            // kokio senummo js mes norim paversti veikianciu senesnese narsyklese
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  plugins: [
    new ImageMinimizerPlugin({
      minimizerOptions: {
        plugins: [
          ["svgo"],
          ["gifsicle"],
          ["pngquant", { quality: [0.3, 0.6] }],
          ["mozjpeg", { quality: 50 }],
        ],
      },
    }),
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
    new HtmlWebpackPlugin({
      title: "This is dynamic Webpack Title",
      template: "src/template.html",
    }),
  ],
};
