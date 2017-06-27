const path = require('path');
const webpack = require('webpack');
const Browser = require('open-browser-webpack-plugin')
const ROOT_PATH = path.resolve(__dirname),
    APP_PATH = path.resolve(ROOT_PATH, './src'),
    BUILD_PATH = path.resolve(ROOT_PATH, './build'),
    htmlWebpack = require('html-webpack-plugin'),
    Ex = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        app: path.resolve(APP_PATH, './part2/app.jsx'),
        // common: ['react', 'react-dom'],
    },
    output: {
        path: path.resolve(BUILD_PATH),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.js', '.scss', '.jsx'],
    },
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                loader: ['babel-loader'],
                exclude: /node_modules/
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
            },
            {
                // 处理图片文件
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader?name=img/[name].[ext]&limit=8192',

            },
            {
                // 处理字体文件
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 7186, // inline base64 if <= 7K
                    name: 'css/fonts/[name].[ext]'
                }
            }
        ]
    },
    plugins: [
        // new webpack.optimize.ModuleConcatenationPlugin(),

        new htmlWebpack({
            template: './index.html'
        }),
        new Ex('style.css'),


    ]
}