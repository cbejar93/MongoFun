
var express = require("express");
var logger = require("morgan");
var scraper = require("./scripts/scraper")
var mongoose = require("mongoose");

var PORT = 8080 || process.env.PORT;

var app = express();
app.use(express.static("public"));

var db = require("./models")
scraper();

mongoose.connect ("mongodb://localhost/nyt")


app.listen(PORT, function(){
    console.log( "App running on Port " + PORT )
})