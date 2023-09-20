const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    resolve: {
        extensions: ["*", ".js", ".jsx", ".ts", ".tsx"],
    },
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "bundle.js",
        publicPath: "/"
    },
    module: {
        rules: [
            {
                test: /\.js|.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: {
                    loader: "file-loader"
                }
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
    ],
    devServer: {
        static: path.resolve(__dirname, "./dist"),
        hot: true,
        historyApiFallback: true,
    }
}