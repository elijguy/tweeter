"use strict";


const MongoClient = require("mongodb").MongoClient;
const MONGODB_URI = "mongodb://localhost:27017/tweeter";
const PORT          = 8080;
const express       = require("express");
const bodyParser    = require("body-parser");
const app           = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


/*When the Mongo database connects,
it will console.log a message about whether it
the connection failed or succeeded line(21 or 24)*/

var db = (MongoClient.connect(MONGODB_URI, (err, db) => {
  if (err) {
    console.error(`Failed to connect: ${MONGODB_URI}`);
    throw err;
  }
  console.log(`Connected to mongodb: ${MONGODB_URI}`);


/*the live connection(db) is passed to the function in ./lib/data-helpers.js line(29)*/

  const DataHelpers = require("./lib/data-helpers.js")(db);



// The `tweets-routes` module works similarly: we pass it the `DataHelpers` object
// so it can define routes that use it to interact with the data layer.
const tweetsRoutes = require("./routes/tweets")(DataHelpers);

// Mount the tweets routes at the "/tweets" path prefix:
app.use("/tweets", tweetsRoutes);
}));

app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});
