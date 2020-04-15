const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");
const insertMovies = require("./interns");
const findMovies = require("./findInterns");
const updateMovie = require("./updateInterns");
const url = "mongodb://localhost:27017";
const dbName = "xemicolon";
const client = new MongoClient(url, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

// Use connect method to connect to the Server
client.connect(function (err) {
  assert.equal(null, err);
  console.log("Connected to database successfully!");
  const db = client.db(dbName);

  // prevent multiple entries into our database when you run
  if (db.collection("myMovies")) {
    db.collection("myMovies").drop();
  }

  insertMovies(db, function () {
    findMovies(db, function () {
      updateMovie(db, function () {
        client.close();
      });
    });
  });
});
