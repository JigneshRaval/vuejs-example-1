// webpack.config.js
let webpack = require('webpack');
let path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

function resolve (dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    // This is the "main" file which should include all other modules
    entry: './src/main.js',
    // Where should the compiled file go?
    output: {
        filename: 'bundle.js'
    },
    resolve: {
        alias: {
            //vue: 'vue/dist/vue.js',
            components: path.resolve(__dirname, '/src/components'),
            'vue$': 'vue/dist/vue.esm.js',
            '@': resolve('src'),
        },
        extensions: ['*', '.js', '.vue', '.json']
    },
    module: {
        // Special compilation rules
        rules: [
            {
                // Ask webpack to check: If this file ends with .js, then apply some transforms
                test: /\.js$/,
                // Transform it with babel
                loader: 'babel-loader',
                // don't transform node_modules folder (which don't need to be compiled)
                exclude: /(node_modules|bower_components)/,
                query: {
                    presets: ['es2015']
                }
            },
            {
                // Ask webpack to check: If this file ends with .vue, then apply some transforms
                test: /\.vue$/,
                // don't transform node_modules folder (which don't need to be compiled)
                exclude: /(node_modules|bower_components)/,
                // Transform it with vue
                loader: 'vue-loader',
                options: {
                    hotReload: true // disables Hot Reload
                }
            }
        ]
    },
    plugins: [
        //new webpack.HotModuleReplacementPlugin()
        /*new UglifyJSPlugin({
            sourceMap: true
        });*/
    ]
}
