const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { InjectManifest } = require("workbox-webpack-plugin"); 

module.exports = {
    entry: "./app.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            /* style and css loader */
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    }
                ]
            }
        ]
    },
    /* plugin */
    plugins: [
        /* HTML Webpack Plugin */
        new HtmlWebpackPlugin({
            template: "index.html",
            filename: "./index.html"
        }),
        new CopyPlugin({
            patterns: [
              { from: 'assets/css/', to: 'assets/css/' },
              { from: 'assets/images/', to: 'assets/images/' },
              { from: './manifest.json'},
            ],
          }),
         new InjectManifest({
             swSrc: path.resolve(__dirname, "service-worker.js"),
         })
    ]
}