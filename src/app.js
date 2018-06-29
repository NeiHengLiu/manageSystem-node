const Koa = require('koa')
const cors = require('koa2-cors')
const bodyParser = require('koa-bodyparser')

const app = new Koa()

// 引入路由文件
const router = require('./router')

// 设置端口
const port = 886

app.use(cors())
app.use(bodyParser())

// 调用后台路由
router.server(app)

// 调用客户端路由
router.client(app)

app.listen(port, () => {
    console.log(`server running @ http://localhost:${port}`)
})