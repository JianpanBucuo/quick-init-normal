### 自用脚手架工具 个人搭建

#### 支持 css
安装 (npm install --save-dev)
- style-loader 
- css-loader 
- scss-loader

#### 支持 es6语法
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

#### 清理dist文件夹

- clean-webpack-plugin

webpack.config.js 增加
```js
    plugins:[
        new CleanWebpackPlugin(),
    ]

```

#### 增加html模板
- html-webpack-plugin

```js
    plugins:[
        new htmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
```