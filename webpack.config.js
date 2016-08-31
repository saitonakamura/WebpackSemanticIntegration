var path = require("path");
var webpack = require("webpack");

module.exports = {
     entry: './index.js',
     output: {
         path: path.resolve(__dirname, "build"),
         filename: 'app.bundle.js'
     },
     resolve: {
       alias: {
         'semantic-ui': path.join(__dirname, "node_modules", "semantic-ui-css", "semantic.js"),
       },
       extensions: ['', '.js', '.jsx']
     },
     module: {
       loaders: [{
         test: /\.jsx?$/,
         loader: 'babel-loader'
       }]
     },
     plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ]
 };
