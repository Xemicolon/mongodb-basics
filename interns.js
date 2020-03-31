const MongoClient = require("mongodb").MongoClient,
  url = "mongodb://localhost:27017/xemicolon";

MongoClient.connect(
  url,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, db) => {
    if (err) throw err;
    var mydb = db.db("mydb");
    mydb.createCollection("interns", (err, interns) => {
      if (err) throw err;
      console.log("Interns collection created");
      console.log(interns);
      db.close();
    });
  }
);
