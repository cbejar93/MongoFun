const express = require("express");
const scrape = require('../scripts/scraper.js');
const db = require('../models');
const mongoose = require("mongoose");
const router = express.Router();
const app = express();
const PopData = require("../controllers/fetch");
const getData = require("../controllers/retrive");
var path = require("path");


router.get('/find', function (req, res){
    popData();
})

router.get('/articles', function(req, res){
    getData(res);
})

router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

module.exports = router;






