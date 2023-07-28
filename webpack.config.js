const path = require("path");
const fs = require("fs");

const HtmlWebPackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const webpack = require("webpack");
const ESLintPlugin = require("eslint-webpack-plugin");
// const BundleAnalyzerPlugin =
//   require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
//
const isProduction = process.env.NODE_ENV === "development";
// Active backend link for ./API_service/folder request.
const API_BASE_URL = isProduction
  ? "https://localhost:4000"
  : "https://production.url.com";
// ...
module.exports = () => {
  return {
    // performance: {
    //   hints: 'warning', // 'error' or false are also valid
    //   maxEntrypointSize: 50000, // in bytes
    //   maxAssetSize: 100000, // in bytes
    // },
    cache: {
      type: "filesystem",
      buildDependencies: {
        config: [__filename],
      },
    },
    entry: ["./front-end/index/index.tsx"],
    output: {
      path: path.resolve(__dirname, "./dist"),
      filename: "./js/index.js",
    },
    devServer: {
      port: 5003,
      historyApiFallback: true,
      // allowedHosts: ['', ''],
      headers: {
        // "Access-Control-Allow-Origin": "",
        "Access-Control-Allow-Origin": ["https://", "https://localhost:4000"],
        "Access-Control-Allow-Headers":
          "Origin, X-Requested-With, Content-Type, Accept",
      },
      // https: {
      //   key: fs.readFileSync(path.join(__dirname, 'certs', 'server-key.pem')),
      //   cert: fs.readFileSync(path.join(__dirname, 'certs', 'server-cert.pem')),
      // },
    },

    resolve: {
      // extensions: ['.tsx', '.ts', '.js', '.jsx'], typescript
      extensions: [".tsx", ".ts", ".js"],
      alias: {
        "~": path.resolve(__dirname, "front-end"),
        "~APIS": path.resolve(__dirname, "front-end/API_service"),
        "~IMG": path.resolve(__dirname, "front-end/img_icon_svg"),
        "~CONTEXT": path.resolve(__dirname, "front-end/index/context"),
        "~UI": path.resolve(__dirname, "front-end/components/ui"),
        "~UX": path.resolve(__dirname, "front-end/components/ux"),
        "~APISERVICES": path.resolve(__dirname, "front-end/api-services"),
        "~ABI": path.resolve(__dirname, "abi"),
        "~CONFIGS": path.resolve(__dirname, "front-end/index/configs"),
      },
      fallback: {
        http: require.resolve("stream-http"),
        https: require.resolve("https-browserify"),
        os: require.resolve("os-browserify/browser"),
        url: require.resolve("url/"),
        util: require.resolve("util/"),
        assert: require.resolve("assert/"),
        stream: require.resolve("stream-browserify"),
        buffer: require.resolve("buffer/"),
      },
    },
    devtool: "source-map",
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ["babel-loader"],
        },

        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          loader: "ts-loader",
          options: {
            transpileOnly: false,
          },
        },

        {
          test: /\.s[ac]ss$/i,
          use: ["style-loader", "css-loader", "sass-loader"],
        },

        {
          test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[name].[ext]",
                outputPath: "fonts",
              },
            },
          ],
        },

        {
          test: /\.(png|jpg|gif|jpeg)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[name].[ext]",
                outputPath: "img",
              },
            },
          ],
        },

        {
          test: /\.svg$/,
          use: ["@svgr/webpack", "url-loader"],
        },

        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader",
            },
          ],
        },

        // {
        //   test: /\.(graphql|gql)$/,
        //   exclude: /node_modules/,
        //   loader: 'graphql-tag/loader'
        // },
      ],
    },

    plugins: [
      new webpack.ProvidePlugin({
        Buffer: ["buffer", "Buffer"],
      }),

      new Dotenv(),
      new HtmlWebPackPlugin({
        template: "./front-end/index/index.html",
        filename: "./index.html",
      }),
      new ESLintPlugin({
        extensions: [
          // "js",
          "jsx",
          "ts",
          "tsx",
        ],
      }),
      new webpack.DefinePlugin({
        "process.env.REACT_APP_API_BASE_URL": JSON.stringify(API_BASE_URL),
      }),
      // new BundleAnalyzerPlugin({
      //   analyzerMode: isProduction ? 'disabled' : 'server',
      // }),
    ],

    performance: {
      hints: false,
    },
  };
};
