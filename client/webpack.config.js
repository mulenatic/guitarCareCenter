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
	    // the url-loader uses DataUrls.
	    // the file-loader emits files.
	    {test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff'},
	    {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
	    {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
	    {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'},
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


