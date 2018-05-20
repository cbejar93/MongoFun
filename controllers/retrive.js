const express = require("express").Router();
const scrape = require('../scripts/scraper.js');
const db = require('../models');
var mongoose = require("mongoose");




function getData(res){
    console.log("You've hit get Data")
    db.Article.find({}).then(function(dbArticle){
        res.json(dbArticle);
    }).catch(function(err){
        res.json(err);
    });
};

module.exports = getData;