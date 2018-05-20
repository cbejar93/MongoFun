
var express = require("express");
var logger = require("morgan");
var scraper = require("./scripts/scraper");
var mongoose = require("mongoose");
var logger = require("morgan");

var PORT = 8080 || process.env.PORT;

var app = express();
app.use(express.static("public"));

var db = require("./models");
app.use(logger("dev"));


mongoose.connect("mongodb://localhost/news_db");

var routes = require("./routes/mongoAPI");
app.use(routes);


app.listen(PORT, function(){
    console.log( "App running on Port " + PORT );
})