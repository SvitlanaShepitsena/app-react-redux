global.Promise = require('bluebird'); // for node 0.10
var autoprefixer = require('autoprefixer');
var precss = require('precss');

var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {

    entry: "./client/app.js",
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                BROWSER: JSON.stringify(true),
                NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
            }
        }),
        new ExtractTextPlugin("[name].css"),
        new OpenBrowserPlugin({ url: 'http://localhost:3001' })
    ],
    output: {
        path: __dirname + '/public/static/build/',
        filename: "main.js",
        publicPath: "static/build/"
    },
    watchOptions: {
        aggregateTimeout: 100,
        poll: 1000
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader")
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader!less-loader")
            },


            {test: /\.jsx?$/, loader: "react-hot!babel", exclude: [/node_modules/, /public/]},

            {test: /\.json$/, loader: "json-loader"}

        ]
    },
    postcss: function () {
        return [autoprefixer, precss];
    }

};
