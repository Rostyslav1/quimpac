var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

var extractPlugin = new ExtractTextPlugin({
   filename: 'main.css',
});

module.exports = {
    entry: {
        app: './src/js/app.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015']
                        }
                    }
                ]
            },
            {
                test: /\.sass$/,
                use: extractPlugin.extract({
                    use: ['css-loader', 'sass-loader'],
                })
            },
            {
                test: /\.html$/,
                use: [{
                    loader: 'html-loader',
                    options: {
                        minimize: false,
                    }
                }],
            },
            {
                test: /\.(jpg|png|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'img/',
                            publicPath: 'img/',
                        }
                    }
                ]
            },
         
            {
                test: /\.(woff|ttf|eot)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/',
                            publicPath: 'fonts/',
                        }
                    }
                ]
            },
        ]
    },
    plugins: [
        extractPlugin,
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html',
            // minify: false
        }),
        new HtmlWebpackPlugin({
            filename: 'nuestra-empresa.html',
            template: 'src/nuestra-empresa.html',
            chunks: ['app'],
            // minify: false
        }),
        new HtmlWebpackPlugin({
            filename: 'que-hacemos.html',
            template: 'src/que-hacemos.html',
            chunks: ['app'],
            // minify: false
        }),
        new HtmlWebpackPlugin({
            filename: 'contactanos.html',
            template: 'src/contactanos.html',
            chunks: ['app'],
            // minify: false
        }),
        new HtmlWebpackPlugin({
            filename: 'quimicos.html',
            template: 'src/quimicos.html',
            chunks: ['app'],
            // minify: false
        }),
        new HtmlWebpackPlugin({
            filename: 'fosfatos.html',
            template: 'src/fosfatos.html',
            chunks: ['app'],
            // minify: false
        }),
        new HtmlWebpackPlugin({
            filename: 'sales-industriales.html',
            template: 'src/sales-industriales.html',
            chunks: ['app'],
            // minify: false
        }),
        new HtmlWebpackPlugin({
            filename: 'product.html',
            template: 'src/product.html',
            chunks: ['app'],
            // minify: false
        }),
        new HtmlWebpackPlugin({
            filename: 'talento.html',
            template: 'src/talento.html',
            chunks: ['app'],
            // minify: false
        }),
        new CleanWebpackPlugin(['dist']),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
        })
    ]
};