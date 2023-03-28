var path = require('path');

const miniCss = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'webtour.js',
        clean: true
    },
    module: {
        rules: [
            {
                test:/\.css$/,
                use: [
                    miniCss.loader,
                    'css-loader',
                ]
            },
            {
                test: /(\.jsx|\.js)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader"
                }
            },
        ]
    },

    plugins: [
        new miniCss({
            filename: 'webtour.css'
         }),
        new HtmlWebpackPlugin({
            template: 'docs/index.html'
        })
    ],

    mode: "production"
}