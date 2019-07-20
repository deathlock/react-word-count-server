'use strict';

var async = require("async");

//Including required packages
var mongoose = require('mongoose'),
  Word = mongoose.model('Word'); // Including Word model

//Add Function
exports.add = async function (req, res) {

  let i = 0;
  let data = req.body;
  let bulk = Word.collection.initializeOrderedBulkOp();

  async.whilst(
    function () { return i < data.length; },
    function (callback) {
      console.log(data[i]);

      bulk.find(
        { word: data[i].word },
      ).upsert().updateOne({
        $set: {
          word: data[i].word,
          count: data[i].count
        }
      });
      i++;

      if (i % 1000 == 0) {
        bulk.execute(function (err, response) {
          if (err) callback(err);
          console.log(response);
          bulk = Word.collection.initializeOrderedBulkOp();
          callback();
        })
      } else {
        callback();
      }

    },
    function (err) {
      if (err)
        console.log(err);
      else {
        if (i % 1000 != 0)
          bulk.execute(function (err, response) {
            if (err) console.log(err)
            console.log(response);
            // done
            return res.status(200).json({ message: "success" });
          });
        else
          // done
          return res.status(200).json({ message: "success" });
      }

    }
  );
};

exports.getWords = function (req, res) {
  Word.find({}).then(function (words) {
    return res.status(200).send({
      message: "success",
      words: words
    })
  });
}

