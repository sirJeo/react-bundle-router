const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const fs = require('fs');

const webpackConfig = require('./webpack.config');

const server = express();
const wp = webpack(webpackConfig);

server.use(webpackDevMiddleware(wp, {
    publicPath: '/js/',
    stats: {
        colors: true
    }
}));

server.use(express.static('./public'));

server.use((req, res) => {
    fs.createReadStream('./public/index.html').pipe(res);
});


server.listen(3000, () => {
    console.log('Server listened 3000');
});