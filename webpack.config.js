const { sources } = require("webpack");
let mode = "development";

if (process.env.NODE_ENV === "production") {
    mode = "production";
}

module.exports = {
    mode: mode,

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /mode_modules/,
                use: {
                    loader:"babel-loader",
                }, 
            },
        ]
    },

    devtool:"source-map",
    devServer: {
        contentBase: "./dist",
    },
};