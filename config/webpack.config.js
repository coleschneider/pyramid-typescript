const webpack = require("webpack");
const paths = require("./paths");

// Constants
const nodeEnv = process.env.NODE_ENV || "development";
const isProd = nodeEnv === "production";

const config = {
  mode: nodeEnv,
  devtool: isProd ? false : "cheap-module-source-map",
  context: paths.appDirectory,
  entry: {
    app: paths.entry,
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      !isProd && {
        loader: "source-map-loader",
        test: /\.js$/,
        exclude: /node_modules/,
        enforce: "pre",
      },
    ].filter(Boolean),
  },
  output: {
    path: paths.build,
    filename: "bundle.js",
    libraryTarget: "umd",
    publicPath: "/dist/",
    umdNamedDefine: true,
  },
  optimization: {
    mangleWasmImports: true,
    mergeDuplicateChunks: true,
    minimize: isProd,
    nodeEnv: nodeEnv,
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(nodeEnv),
    }),
    !isProd && new webpack.HotModuleReplacementPlugin(),
  ].filter(Boolean),
  devServer: {
    contentBase: paths.build,
    publicPath: "/",
    stats: {
      colors: true,
      hash: false,
      version: false,
      timings: true,
      assets: true,
      chunks: false,
      modules: false,
      reasons: false,
      children: false,
      source: false,
      errors: true,
      errorDetails: true,
      warnings: false,
      publicPath: false,
    },
  },
};

module.exports = config;
