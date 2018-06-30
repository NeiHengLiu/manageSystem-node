const router = require('koa-router')()
const server = require('../controller/server')
const client = require('../controller/client')

module.exports = {
    async server (app) {
        // 后台接口列表
        router.get('/server', server.test)
    
        app.use(router.routes())
    },
    async client (app) {
        // 客户端接口列表
        router.get('/client', client.test)
    
        app.use(router.routes())
    }
}