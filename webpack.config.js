const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
    entry: {
    	app: './src/index.js',
    	print: './src/print.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

    // source map
    devtool: 'inline-source-map',

    // This tells webpack-dev-server to serve the files from the dist directory on localhost:8080
    devServer: {
    	contentBase: './dist'
    },
    plugins: [
    	// clean
    	new CleanWebpackPlugin('dist'),

    	// 自动生成index.html
    	new HtmlWebpackPlugin({
    		title: 'Development'
    	})
    ],
    module: {
    	rules: [{
    		test: /\.css$/,
    		use: ['style-loader', 'css-loader']
    	}, {
    		test: /\.(png|svg|jpg|gif)$/,
    		use: ['file-loader']
    	}]
    }
};