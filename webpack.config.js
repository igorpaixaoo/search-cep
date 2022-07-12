const path = require('path'); 
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
    devtool: 'source-map', 
    entry: './src/index.js', 
    output: {					
        path: path.resolve(__dirname, 'dist'),    
        filename: 'bundle.js'  
    }, module: {
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude: /node-modules/,
                use: {
                    loader: "babel-loader"
                }  
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            }   	
        ]	
    }, plugins: [
        new HtmlWebPackPlugin({
            template: "./public/index.html",
            filename: "./index.html"
        })
    ]			
}