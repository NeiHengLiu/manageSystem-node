const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';

MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    console.log(db)
    const dbLnh = db.db('lnh');
    const data = [
        {"name":"赵园园", "sex":"女", "age": "18", "professional": "演员"},
        {"name":"高丽颖", "sex":"女", "age": "26", "professional": "演员"},
        {"name":"李小龙", "sex":"男", "age": "35", "professional": "演员"},
        {"name":"马化云", "sex":"男", "age": "42", "professional": "企业家"},
        {"name":"马腾", "sex":"男", "age": "54", "professional": "企业家"}
    ]
    dbLnh.collection('site').insertMany(data, (err, result) => {
        if(err) throw err;
        console.log('插入文档成功');
        console.log(result);
        db.close();

        // dbLnh.collection('site').find().toArray((err, result) => {
        //     if(err) throw err;
        //     console.log(result);
        //     db.close();
        // })
    })
})