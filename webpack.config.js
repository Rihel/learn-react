const webpack = require('webpack'),
    path = require('path'),
    htmlWebpack = require('html-webpack-plugin'),
    Ex = require('extract-text-webpack-plugin');

const ROOT_PATH = path.resolve(__dirname),
    APP_PATH = path.resolve(ROOT_PATH, './src'),
    BUILD_PATH = path.resolve(ROOT_PATH, './build');
module.exports = {
    devtool: "source-map",
    entry: {
        app: path.resolve(APP_PATH, './app.jsx'),
        common: ['react', 'react-dom'],
    },
    output: {
        path: path.resolve(BUILD_PATH),
        filename: '[name].js'
    },
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                loader: ['babel-loader']
            },
            {
                test: /\.(css|sass|scss)$/,
                include: APP_PATH,
                use: Ex.extract({
                    fallback: "style-loader",
                    use: [{
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1,
                                modules: true,
                                localIdentName: '[name]-[local]-[hash:base64:5]'
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: () => [require('autoprefixer')]
                            }
                        },
                        {
                            loader: 'sass-loader'
                        },

                    ]
                })
            }
        ]
    },
    devServer: {
        inline: true,
        hot: true
    },
    plugins: [
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            filename: '[name].js',
        }),
        new htmlWebpack({
            template: './index.html'
        }),
        new Ex('style.css')
    ]
}