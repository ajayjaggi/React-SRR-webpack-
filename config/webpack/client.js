const path = require('path')
const {paths} = require('../paths')
const LoadablePlugin = require('@loadable/webpack-plugin')

const clientConfig = {
    name: 'client',
    target: 'web',
    entry: paths.clientEntry,
    mode: 'development',
    output: {
        path: path.join(paths.clientBuild,paths.publicPath),
        filename: 'clientBundle.js',
        publicPath: paths.publicPath,
        chunkFilename: '[name].js'
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg)$/,
                loader: 'file-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                // options: {
                //     preset: ['react-app']
                // }
            }
        ]
    },
    resolve:{
        extensions: ['.js', '.mjs', '.json', '.jsx', '.css'],
        modules: ['node_modules']
    },
    plugins: [
        new LoadablePlugin()
    ]
}

module.exports = clientConfig