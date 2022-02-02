module.exports = {
    devServer: {
        open: true,
        host: 'localhost',
        port: 8080,
        proxy: {
            "/api/v1":{
                target:'https://cnodejs.org',
              }
        }
    }
}