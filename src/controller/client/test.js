module.exports = async (ctx, next) => {
    ctx.response.body = {
        type: 'get',
        msg: '请求成功，优化业务逻辑后的信息-->client'
    }
}