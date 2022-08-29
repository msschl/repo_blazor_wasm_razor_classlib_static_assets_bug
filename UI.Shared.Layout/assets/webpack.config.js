const path = require('path');

const CompressionPlugin = require("compression-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = env => {
    return {
        entry: './src/index.ts',
        output: {
            filename: 'index.js'
        },
        devtool: env && env.production ? 'none' : 'source-map',
        module: {
            rules: [
                // rule set for fontawesome asset resources
                // find these extensions in our css, copy the files to the outputPath,
                // and rewrite the url() in our css to point them to the new (copied) location
                {
                    test: /\.(woff(2)?|eot|otf|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/i,
                    type: 'asset/resource',
                    generator: {
                        filename: 'webfonts/[hash][ext][query]'
                    }
                },

                // rule set for scss, sass, css file compilation
                {
                    test: /\.s?css$/i,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                            options: { publicPath: "" }
                        },
                        "css-loader",
                        "sass-loader",
                        "postcss-loader"
                    ],
                },

                // rule set for ts compilation
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
            ],
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
        },
        plugins: [
            new MiniCssExtractPlugin(),
            new CompressionPlugin()
        ],
    };
};