const path = require("path");
const HtmlWebPackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].js",
    library: "segmed_segmail",
    libraryTarget: "umd"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: require.resolve("babel-loader"),
            options: {
                presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
                plugins: ['@babel/plugin-proposal-class-properties']
              }
          }
        ]
      },
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
        template: "./public/index.html"
    })
  ]
};