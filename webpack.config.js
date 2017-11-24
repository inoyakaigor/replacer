const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
    entry: __dirname + '/src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'static')
    },
    // devtool: 'source-map',
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
                    { loader: "style-loader" },
                    { loader: "css-loader" }
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
    plugins: [HtmlWebpackPluginConfig],
    resolve: {
      modules: [path.resolve(__dirname, "src/components/"), "node_modules"]
    }
}