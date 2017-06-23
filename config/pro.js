let config = require('./base');
let webpack = require('webpack')



config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        },
        except: ['$super', '$', 'exports', 'require']
    }), new webpack.optimize.CommonsChunkPlugin({
        name: 'common',
        filename: '[name].[hash:8].js',
    })
)


module.exports = config;