const express = require("express");
const scrape = require('../scripts/scraper.js');
const db = require('../models');
var mongoose = require("mongoose");
var router = express.Router();

function getUno (res, id){
    console.log("UNO!!!!!");
    db.Article.findOne({ _id: id })
    .populate("note")
    .then(function(dbArticle) {
      // If we were able to successfully find an Article with the given id, send it back to the client
      res.json(dbArticle);
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
}

module.exports = getUno;