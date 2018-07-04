const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';

MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    const dbLnh = db.db('lnh');
    const data = [
        {"name":"lnh3", "sex":"女", "age": "16"},
        {"name":"lnh4", "sex":"女", "age": "17"},
        {"name":"lnh5", "sex":"男", "age": "18"}
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