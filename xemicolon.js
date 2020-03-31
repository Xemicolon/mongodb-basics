const MongoClient = require("mongodb").MongoClient,
  db_name = "XemiColon",
  url = "mongodb://localhost:27017/" + db_name;

MongoClient.connect(
  url,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, db) => {
    if (err) throw err;
    console.log(`Database created by ${db_name}`);
    db.close();
  }
);
