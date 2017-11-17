"use strict";

// Defines helper functions for saving and getting tweets, using the database `db`
module.exports = function makeDataHelpers(db) {


  return {



    // Saves a tweet to `db`
    saveTweet: function(newTweet, callback) {

      var insertdoc = db.collection("tweets").insertOne(newTweet,function(err,result){

        callback();

      });

    },

    // Get all tweets in `db`, sorted by newest first
    getTweets: function(callback) {

      var cursorArray = db.collection("tweets").find({}).toArray(function(err,result){

        const sortNewestFirst = (a, b) => a.created_at - b.created_at;

        callback(null, result.sort(sortNewestFirst));

      });

    }





  };
}




