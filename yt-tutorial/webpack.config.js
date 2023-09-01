const path = require(`path`)
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = { // making the webpack.config.js a js module
    entrty: `./app/index.js`, // setting up entry point
    module: {  // specifying the modules to be used
        rules: [

            {
                test: /\.svg$/,
                use: 'svg-inline-loader'  //https://www.npmjs.com/package/svg-inline-loader
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"], //https://www.npmjs.com/package/css-loader
            },
            {
                test: /\.(js)$/,
                use: `babel-loader` //https://www.npmjs.com/package/babel-loader
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, `dist`),
        filename: `bundle.js`
    },
    plugins: [
        new HtmlWebpackPlugin() //https://www.npmjs.com/package/html-webpack-plugin

    ],
    mode: process.env.NODE_ENV === `production` ? `production` : `development`,
};