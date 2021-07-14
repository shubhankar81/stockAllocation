const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        chunkFilename: '[id].js',
        publicPath: ''
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module : {
        rules : [{
            exclude : /node_modules/,
            test : /\.js$/,
            loader : 'babel-loader'
        },
        {
            test : /\.css$/,
            use : ["style-loader", "css-loader"]
        },
        {
            test : /\.(png|jpg|gif|eot|svg|ttf|woff|woff2)$/,
            use : [{
                loader : 'file-loader',
                options : {
                    name : '[path][name]-[hash:8].[ext]'
                }
            }]
        }
    ]
    },
    // module: {
    //     rules: [
    //         {
    //             test: /\.js$/,
    //             loader: 'babel-loader',
    //             exclude: /node_modules/
    //         },
    //         {
    //             test: /\.css$/,
    //             use: [
    //                 { loader: 'style-loader' },
    //                 { 
    //                     loader: 'css-loader',
    //                     options: {
    //                         modules: {
    //                             localIdentName: "[name]__[local]___[hash:base64:5]",
    //                         },														
    //                         sourceMap: true
    //                     }
    //                  }
    //             ]
    //         },
    //         {
    //             test : /\.(png|jpg|gif|eot|svg|ttf|woff|woff2)$/,
    //             use : [{
    //                 loader : 'file-loader',
    //                 options : {
    //                     name : '[path][name]-[hash:8].[ext]'
    //                 }
    //             }]
    //         }
    //     ]
    // },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + '/src/index.html',
            filename: 'index.html',
            inject: 'body'
        })
    ]
};