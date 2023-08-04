module.exports = {
    devServer: {
        disableHostCheck: true,
        open: true,
        host: '0.0.0.0',
        port: 8081,
        proxy: {
            '/api': {
                target: 'http://47.114.52.47',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/'
                }
            }

        }
    }
};