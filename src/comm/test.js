const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';

MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    const dbLnh = db.db('lnh');
    dbLnh.collection('site').find().toArray((err, result) => {
        if(err) throw err;
        console.log(result);
        db.close();
    })
})