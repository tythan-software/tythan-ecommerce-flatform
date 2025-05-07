const path = require('path');
const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = (env, argv) => {
    const mode = argv.mode || 'development';

    return {
        entry: './src/server.ts',
        target: 'node',
        mode: mode,
        target: 'node',
        output: {
            path: path.resolve(__dirname, './dist/src'),
            filename: 'server.js',
            clean: true
        },
        resolve: {
            extensions: ['.ts', '.js'],
        },
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.(png|jpe?g|gif|jp2|webp)$/,
                    use: 'file-loader',
                },
            ],
        },
        plugins: [
            new Dotenv(),
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify(mode)
            })
        ],
        devServer: {
            contentBase: './dist/src',
            open: true
        },
        externals: [ nodeExternals() ], // Don't bundle node_modules
    }
};