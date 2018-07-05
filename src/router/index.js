const router = require('koa-router')()
const server = require('../controller/server')
const client = require('../controller/client')

const serverAPI = '/server'
const clientAPI = '/client'

module.exports = {
    async server (app) {    // 后台接口列表
        /**
         * 测试接口
         */

        router.post(serverAPI, server.test)

        /**
         * 登录
         */

        router.post(serverAPI + '/login/login', server.test)
    
        app.use(router.routes())
    },
    async client (app) {    // 客户端接口列表
        /**
         * 测试接口
         */
        
        router.get(clientAPI, client.test)
    
        app.use(router.routes())
    }
}