
var express = require("express");
var logger = require("morgan");
var scraper = require("./scripts/scraper");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var path = require("path");

var PORT = 8080 || process.env.PORT;

var app = express();
app.use(express.static("public"));

app.use(bodyParser.urlencoded({
    extended: false
  }));

var db = require("./models");
app.use(logger("dev"));

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/news_db";

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);

var routes = require("./routes/mongoAPI");
app.use(routes);


app.listen(PORT, function(){
    console.log( "App running on Port " + PORT );
})