let config = require('./base');
let Browser = require('open-browser-webpack-plugin')
let webpack=require('webpack')


config.plugins.push(
    new Browser(),
    new webpack.optimize.CommonsChunkPlugin({
        name: 'common',
        filename: '[name].js',
    })
)
let devConfig = {
    devtool: "source-map",
    devServer: {
        inline: true,
        hot: true
    }
}

module.exports = Object.assign({}, config, devConfig);