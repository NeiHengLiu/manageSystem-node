const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://127.0.0.1:27017';

module.exports = async (ctx, next) => {
    let tempStr = [];
    await MongoClient.connect(url, (err, db) => {
        if(err) throw err;
        let dbo = db.db('lnh');
        dbo.collection('site').find({}).toArray((err, result) => {
            if(err) throw err;
            // tempStr = result;
            tempStr = result;
            console.log(result);
            db.close();
        })
    })
    ctx.response.body = tempStr;
    // ctx.response.body = tempStr;
    // ctx.response.body = {
    //     type: 'post',
    //     msg: '请求成功，优化业务逻辑后的信息-->server',
    //     parser: ctx.request.body
    // }
}