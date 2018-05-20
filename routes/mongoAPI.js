const express = require("express");
const scrape = require('../scripts/scraper.js');
const db = require('../models');
const mongoose = require("mongoose");
const router = express.Router();
const app = express();
const PopData = require("../controllers/fetch");
const getData = require("../controllers/retrive");

router.get('/find', function (req, res){
    popData();
})

router.get('/', function(req, res){
    getData(res);
})

module.exports = router;






