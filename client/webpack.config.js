const path = require('path');
const webpack = require('webpack');
const failPlugin = require("webpack-fail-plugin");

module.exports = {
    entry: ["./src/guitarCareCenter.app.ts"], 
    output: {
	path: './dist',
	filename: 'bundle.js'
    },
    watch: true,
    devServer: {
	contentBase: "."
    },
    devtool: "source-map",
    resolve: {
	extensions: [".js", ".ts", ""]
    },
    module: {
	loaders: [
	    { test: /\.css$/, loader: "to-string!css", exclude: /node_modules/},
	    { test: /\.css$/, loader: "style!css", exclude: /src/},
	    { test: /\.html$/, loader: "raw"},
	    { test: /\.ts$/, loader: "ts-loader"}
	],
    },
    plugins: [
	failPlugin
    ]
};


