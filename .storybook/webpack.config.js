const path = require("path");
const include = path.resolve(__dirname, "../");

module.exports = {
  // Add '.ts' and '.tsx' as resolvable extensions.
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts)/,
        loader: "babel-loader!ts-loader",
        exclude: /node_modules/,
        include
      },
      { test: /\.css$/, loader: "style-loader!css-loader", include: __dirname },
      {
        test: /\.(css|scss|sass)$/,
        loaders: ["style-loader", "css-loader", "sass-loader"],
        include: path.resolve(__dirname, "../")
      },
      {
        test: /\.(woff|woff2)$/,
        use: {
          loader: "url-loader",
          options: {
            name: "fonts/[hash].[ext]",
            limit: 5000,
            mimetype: "application/font-woff"
          }
        }
      },
      {
        test: /\.(ttf|eot|svg|png)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "fonts/[hash].[ext]"
          }
        }
      }
    ]
  }
};
