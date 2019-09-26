const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
module.exports = {
    // bundle入口
    entry: path.join(__dirname, './src/main.js'),
    // bundle输出
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js' //可重命名
    },
    devServer:{
        open: false,
        port: 3000,
        contentBase: 'src',
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html?limit=10240'),
            filename: 'index.html'
        }),
        new VueLoaderPlugin()
    ],
    module:{
        rules: [
            {test: /\.css$/, use: ['style-loader','css-loader']},
            {test: /\.(jpg|png|gif|bmp|jpeg)$/,use: 'url-loader'},
            {test: /\.(ttf|eot|svg|woff|woff2|otf)$/, use: 'url-loader'},
            {test: /\.js$/, use: 'babel-loader',exclude: /node_modules/},
            {test: /\.vue$/, use: 'vue-loader'}
        ]
    },
    resolve:{
        alias:{
            "vue$": "vue/dist/vue.js"
        }
    },
    mode: 'development'
};
