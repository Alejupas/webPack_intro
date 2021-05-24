const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  devtool: "source-map", // kad kai sukompiliujam development eitu geriau suprasti koda
  devServer: {
    contentBase: "./dist",
  },
  entry: {
    //   nurodom musu programos pagrindini js faila
    main: path.resolve(__dirname, "./src/app.js"),
  },
  output: {
    filename: "main.bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    assetModuleFilename: "images/[name][ext]", // nurodome kur bus padeti musu paveiksleliai
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
        use: ["style-loader", "css-loader"], // perdarom .css failus i dist folderi
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
    new HtmlWebpackPlugin({
      title: "This is dynamic Webpack Title",
      template: "src/template.html",
    }),
  ],
};
