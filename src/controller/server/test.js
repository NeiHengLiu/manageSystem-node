const user = require('../../db').get('user')

module.exports = async (ctx, next) => {
    // let tempVal = await user.find({})
    let tempVal = await user.remove({userName: 'lnh'})
    ctx.response.body = tempVal
}

