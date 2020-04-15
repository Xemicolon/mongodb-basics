// const assert = require("assert");

// const updateMovie = (db, callback) => {
//   const collection = db.collection("myMovies");

//   collection.updateOne(
//     { movie: "The Banker" },
//     { $set: { movie: "Money Heist", year: "2017", rating: 9 } },
//     (err, doc) => {
//       // console.log("Updated a document");
//     }
//   );

//   collection.find({}).toArray((err, doc) => {
//     assert.equal(err, null);
//     console.log("Found the following updated records:");
//     console.log(doc);
//     callback(doc);
//   });
// };

// module.exports = updateMovie;

const assert = require("assert");

const updateMovie = function (db, callback) {
  const collection = db.collection("myMovies");
  collection.updateOne(
    { movie: "The Banker" },
    { $set: { movie: "Money Heist", year: 2017, rating: "9" } },
    function (err, doc) {
      assert.equal(err, null);

      if (doc.result.nModified === 1) {
        console.log("Updated one document");

        collection.find({}).toArray(function (err, docs) {
          assert.equal(err, null);
          console.log("Found updated collection:");
          console.log(docs);
          callback(docs);
        });
      }
    }
  );
};

module.exports = updateMovie;
