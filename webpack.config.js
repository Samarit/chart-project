const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'bundle.[chunkhash].js',
        path: path.resolve(__dirname, 'public')
    },
    devServer:{
        host: '0.0.0.0',
        port: 3000,
        open: true,
        proxy: {
            '/api': 'http://localhost:7777',
            '/icons': 'http://localhost:7777'
        }
    } ,
    plugins: [
        new HTMLPlugin({
            template: './src/index.html'
        }),
        new CleanWebpackPlugin(),
        [
          "postcss-preset-env",
          {
            execute: true
          }
        ]
    ],
    module: {
        rules: [
          {
            test: /\.s[ac]ss$/i,
            use: [
              "style-loader",
              "css-loader",
              "sass-loader",
              "postcss-loader"
            ],
          }, {
            test: /\.(svg|jpg|png|gif)$/,
            use: ['file-loader']
          }
        ],
      }
}