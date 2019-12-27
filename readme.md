## 自用脚手架工具 个人搭建

### 支持 css
安装 (npm install --save-dev)
- style-loader 
- css-loader 

### 支持 scss
安装 (npm install --save-dev)
- scss-loader
```js
module:{
    rules:[
        {
            test: /\.scss$/,
            use: [
                'style-loader',
                'css-loader',
                "sass-loader"
            ]
        }
    ]
}
```
### css添加浏览器前缀 postcss-loader
安装 (npm install --save-dev)
- postcss-loader 
- autoprefixer 
webpack.config.js里添加
```js
module:{
    rules:[
        {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader',
                'postcss-loader'
            ]
        },
        {
            test: /\.scss$/,
            use: [
                'style-loader',
                'css-loader',
                "sass-loader",
                'postcss-loader'
            ]
        }
    ]
}
```
增加 postcss.config.js
```js
module.exports = {
    plugins:[
        require("autoprefixer")
    ]
}
```
### 支持 es6语法
安装 (npm install --save-dev)
-   @babel/cli 
-   @babel/core 
-   @babel/polyfill 
-   @babel/preset-env 
-   babel-loader 
增加 babel.config.js
```js
const presets = [
  [
    "@babel/env",
    {
      targets: {
        edge: "17",
        firefox: "60",
        chrome: "67",
        safari: "11.1",
      },
      useBuiltIns: "usage",
    },
  ],
];

module.exports = { presets };
```

### 清理dist文件夹

- clean-webpack-plugin

webpack.config.js 增加
```js
    plugins:[
        new CleanWebpackPlugin(),
    ]

```

### 增加html模板
- html-webpack-plugin

```js
    plugins:[
        new htmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
```

### 多入口文件开发
- html-webpack-plugin
在htmlWebpackPlugin里配置对应 html模板对应的入口文件
```js
    entry:{
        index:'./src/index.js',
        header: './src/header.js'
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
        })
    ]
```