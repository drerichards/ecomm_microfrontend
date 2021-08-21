const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

module.exports = {
    mode: 'development',
    devServer: {
        port: 8080
    },
    plugins: [ // if 'products' in bootstrap.js not found in node_modules, it will look for it under remotes properties
        new ModuleFederationPlugin({
            name: 'container', // added for clarity and needed for 'remotes'
            remotes: { // lists projects that the container can search to get addl code
                products: 'products@http://localhost:8081/remoteEntry.js', //load file at this URL if container has an import stmt `import abc from 'products'`
                cart: 'cart@http://localhost:8082/remoteEntry.js'
            }
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}