const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src/index.js'),
    plugins: [
        new HtmlWebpackPlugin({
          title: 'to-do-list',
          template: './src/template.html'
        }),
      ],
    output : {
        path: path.resolve(__dirname, 'dist'),
        filename: `[name][contenthash].js`,
        clean: true,
    },
    devtool: 'source-map',
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
        
    },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
        ],
      },
}