const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/xemicolon";
const db_name = "XemiColon";

MongoClient.connect(
  url,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, db) => {
    if (err) throw err;
    console.log(`Databse created by ${db_name}`);
    db.close();
  }
);
