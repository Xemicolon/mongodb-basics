const assert = require("assert");
const movies = [
  {
    movie: "The Banker",
    year: 2020,
    rating: 8,
  },
  {
    movie: "Bad Boys",
    year: 2020,
    rating: 7,
  },
  {
    movie: "The Hunt",
    year: 2020,
    rating: 7,
  },
  {
    movie: "Bloodshot",
    year: 2020,
    rating: 7.5,
  },
  {
    movie: "First Cow",
    year: 2020,
    rating: 6.5,
  },
];

const insertMovies = function (db, callback) {
  //Get the collection from db
  const collection = db.collection("myMovies");
  //Insert movies
  collection.insertMany(movies, function (err, docs) {
    assert.equal(err, null);
    assert.equal(docs.insertedCount, docs.result.n);
    console.log(docs.ops);
    callback(docs);
  });
};

module.exports = insertMovies;
