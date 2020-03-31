const MongoClient = require("mongodb").MongoClient;
const db_name = "XemiColon";
const url = "mongodb://localhost:27017/" + db_name;

MongoClient.connect(
  url,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, db) => {
    if (err) throw err;
    console.log(`Databse created by ${db_name}`);
    db.close();
  }
);
