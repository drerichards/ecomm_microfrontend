const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

// built and runs like an independent module
// setup server to run on a port
// create module with properties
// module is called 'products' accessible through file name 'remoteEntry.js'
// index or remoteEntry access is named as route products/ProductsIndex which is imported into container bootstrap

module.exports = {
    mode: 'development',
    devServer: {
        port: 8081
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'products', // name chosen must match what is in container fed module
            filename: 'remoteEntry.js', // name of the manifest file. standard name => 'remoteEntry'
            exposes: { // which files/modules in the products directory to expose to the outside world when exported as aliases
                './ProductsIndex': './src/index'
            }
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}