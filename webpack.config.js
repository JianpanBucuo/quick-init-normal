const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry:'./src/class1/jqeury.js',
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
            }
        ]
     },
    plugins:[
        new htmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}