const express = require("express");
const scrape = require('../scripts/scraper.js');
const db = require('../models');
var mongoose = require("mongoose");
var router = express.Router();


function writeNote(req, id){
    console.log(req.body);
    db.Note.create(req.body).then(function(dbNote){
        return db.Article.findOneAndUpdate({ _id: req.params.id }, { note: dbNote._id }, { new: true });
    }).then(function(dbArticle) {
        // If we were able to successfully update an Article, send it back to the client
        // res.json(dbArticle);
        console.log("made it!");
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
    //   res.json(err);
    console.log("unfortunatly not!");
    });

}

module.exports = writeNote;