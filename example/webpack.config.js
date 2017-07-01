'use strict';

const path = require('path');
const webpack = require('webpack');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const isDevEnv = () => process.env.NODE_ENV === 'development';
console.log('process.env.NODE_ENV', process.env.NODE_ENV, isDevEnv());

module.exports = {
    name: 'Client build',
    context: `${__dirname}/src/`,

    entry: {
        app: './web/app.js'
    },

    output: {
        path: `${__dirname}/public/js/`,
        publicPath: '/js/',
        filename: '[name].js'
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'bundle-loader!babel-loader',
                include: [path.resolve(__dirname, './src/web/pages')]
            },
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: [
                    path.resolve(__dirname, './node_modules'),
                    path.resolve(__dirname, './public'),
                    path.resolve(__dirname, './src/web/pages')
                ]
            }
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                __DEV: JSON.stringify(isDevEnv())
            }
        })
    ],

    watch: false,
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    },

    devtool: isDevEnv() ? 'source-map' : false
};
