const express = require("express");
const scrape = require('../scripts/scraper.js');
const db = require('../models');
var mongoose = require("mongoose");
var router = express.Router();





function popData(){
scrape()
.then(results => {
    for(i=0; i<results.length; i++){
        db.Article.create(results[i])
         .then(function(dbArticle) {
        //   console.log(dbArticle);
    }).catch(function(err) {
        return res.json(err);
      });

    }

}); 
};


module.exports = popData;
