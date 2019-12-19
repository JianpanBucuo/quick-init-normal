const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin') 
module.exports = {
    entry:'./src/index.js',
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
                   'style-loader',
                   'css-loader'
                 ]
            },
            {
                test: /\.scss$/,
                use: [
                  'style-loader',
                  'css-loader',
                  "sass-loader"
                ]
           }
        ]
     },
    plugins:[
        new CleanWebpackPlugin(),
        new htmlWebpackPlugin({
            template: './src/index.html'
        }),
    ]
}