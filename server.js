var express = require("express");
var logger = require("morgan");

var PORT = 8080 || process.env.PORT;

var app = express();

app.listen(PORT, function(){
    console.log( "App running on Port " + PORT )
})