const { resolve } = require('path');

const HtmlWebPackPlugin = require('html-webpack-plugin');
const isDevelopment = process.env.NODE_ENV !== 'production';

const config = {
    entry: {
        main: resolve('./src/index.tsx')
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: ['awesome-typescript-loader?module-es6'],
                exclude: [/node_modules/]
            },
            {
                test: /\.js$/,
                loader: 'source-map-loader',
                enforce: 'pre'
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: { minimize: !isDevelopment }
                    }
                ]
            },
            {
                test: /\.s?css/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true }
                    },
                    {
                        loader: 'sass-loader',
                        options: { sourceMap: true }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html'
        })
    ],
    resolve: {
        extensions: ['.js', '.ts', '.tsx']
    }
}

module.exports = config;