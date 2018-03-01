//这个模块里封装了所有对数据库的常用操作，不管数据库的什么操作，都需要连接数据库
var MongoClient = require("mongodb").MongoClient;
function _connectDB(callback) {
  var url = "mongodb://127.0.0.1:27017/admin";
  //链接数据库
  MongoClient.connect(url, function (err, db) {
    callback(err, db);
  });
}

//插入数据
exports.insertOne = function (collectionName, data, callback) {
  _connectDB(function (err, db) {
    if(err){
      callback(err, db);
      return;
    }
    db.collection(collectionName).insertOne(data, function (err, result) {
      callback(err, result);
      db.close();    //关闭数据库
    });
  });
}
