const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin') 
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
module.exports = {
    entry:{
        index:'./src/index.js',
        header: './src/header.js'
    },
    output:{
        filename:'[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer:{
        contentBase:'./dist',
    },
     module:{
        rules:[
            {
                test: /\.js$/, 
                exclude: /node_modules/, 
                loader: 'babel-loader'
            },
           {
                 test: /\.css$/,
                 use: [
                    MiniCssExtractPlugin.loader,
                   'css-loader',
                   'postcss-loader'
                 ]
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                    'postcss-loader'
                ]
           }
        ]
     },
    plugins:[
        new CleanWebpackPlugin(),
        new htmlWebpackPlugin({
            template:'./src/index.html',
            filename:'index.html',
            chunks:['index'] // 与入口文件对应的模块名
        }),
        new htmlWebpackPlugin({
            template:'./src/header.html',
            filename:'header.html',
            chunks:['header'] // 与入口文件对应的模块名
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css",
        })
    ]
}