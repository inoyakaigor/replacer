const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const HtmlWebpackPluginConfig = {
    template: __dirname + '/index.html',
    filename: 'index.html',
    inject: 'body'
}

const FaviconsWebpackPluginConfig = {
    logo: './favicon.png',
    persistentCache: true,
    prefix: 'icons/',
    inject: true,
    theme_color: '#4FD1D9',
    background: '#4FD1D9',
    icons: {
        android: true,
        appleIcon: true,
        appleStartup: true,
        coast: false,
        favicons: true,
        firefox: true,
        opengraph: true,
        twitter: true,
        yandex: true,
        windows: true
    }
}

const MiniCssExtractPluginConfig = {
    filename: '[name].css',
    chunkFilename: '[name].css',
}

module.exports = {
    entry: __dirname + '/src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'static'),
        publicPath: 'static/'
    },
    stats: {
        colors: true,
        modules: true,
        reasons: true,
        errorDetails: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                mode: 'local',
                                localIdentName: '[name]--[local]'
                            },
                            localsConvention: 'dashes',
                        }
                    }
                ]
            },
            {
                test: /\.(png|svg|jpe?g|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff2?|eot|ttf|otf)$/,
                use: 'file-loader'
            }
        ]
    },
    plugins: [
        new FaviconsWebpackPlugin(FaviconsWebpackPluginConfig),
        new HtmlWebpackPlugin(HtmlWebpackPluginConfig),
        new MiniCssExtractPlugin(MiniCssExtractPluginConfig),

    ],
    resolve: {
        modules: [path.resolve(__dirname, "src/components/"), "node_modules"]
    }
}
