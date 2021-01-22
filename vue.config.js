// eslint-disable-next-line
const path = require("path");

module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                '@': path.join(__dirname, 'src/'),
                '@components': path.join(__dirname, 'src/components'),
                '@pages': path.join(__dirname, 'src/pages'),
                '@stores': path.join(__dirname, 'src/store')
            },
            extensions: ['.vue']
        }
    },
    transpileDependencies: ['vuex-module-decorators'],
    runtimeCompiler: true
}
