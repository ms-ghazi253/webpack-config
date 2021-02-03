const { sources } = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
let mode = "development";
let target = "web";
if (process.env.NODE_ENV === "production") {
    mode = "production";
    target = "browerslist";
}

module.exports = {
    mode: mode,
    target: target,
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /mode_modules/,
                use: {
                    loader:"babel-loader",
                }, 
            },
            {
                test: /\.s?css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader" ],
            }
        ]
    },

    plugins:[new MiniCssExtractPlugin()],
    devtool:"source-map",
    devServer: {
        contentBase: "./dist",
        hot:true
    },
};