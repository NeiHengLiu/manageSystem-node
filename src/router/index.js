const router = require('koa-router')()
const server = require('../controller/server')
const client = require('../controller/client')

module.exports = {
    async server (app) {
        router.get('/server', server.test)
    
        app.use(router.routes())
    },
    async client (app) {
        router.get('/client', client.test)
    
        app.use(router.routes())
    }
}