"use strict";

// Basic express and Mongo setup:

const PORT = 8080;
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const MongoClient = require("mongodb");
const MONGODB_URI = "mongodb://localhost:27017/tweeter";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// opens the Mongo database and pulls the tweets collection
MongoClient.connect(MONGODB_URI, (err, db) => {
  if (err) {
    console.error(`Failed to connect: ${MONGODB_URI}`);
    throw err;
  }
  // Can access the returned database and knows how to GET from and Save to db
  const DataHelpers = require("./lib/data-helpers.js")(db);

  // POST and GET routes for the Tweets.
  const tweetsRoutes = require("./routes/tweets")(DataHelpers);
  app.use("/tweets", tweetsRoutes);
});

// will print console.log if server is up and running
app.listen(PORT, () => {
  console.log("Tweeter app listening on port " + PORT);
});
