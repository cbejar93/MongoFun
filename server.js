
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

mongoose.connect("mongodb://localhost/news_db");

// app.get("/", function(req, res) {
//     res.sendFile(path.join(__dirname, "./public/index.html"));
//   });

var routes = require("./routes/mongoAPI");
app.use(routes);


app.listen(PORT, function(){
    console.log( "App running on Port " + PORT );
})