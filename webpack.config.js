const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

const outputPath = path.resolve(__dirname, "dist");
const isDevelopment = process.env.NODE_ENV !== "production";
const devtool = "inline-source-map";

module.exports = [
  {
    mode: isDevelopment ? "development" : "production",
    devtool: devtool,
    entry: "./src/background.js",
    output: {
      path: outputPath,
      filename: "background.js",
    },
    plugins: [
      new CopyPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, "app"),
          },
        ],
      }),
    ],
  },
];
