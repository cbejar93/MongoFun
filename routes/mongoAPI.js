const express = require("express");
const scrape = require('../scripts/scraper.js');
const db = require('../models');
const mongoose = require("mongoose");
const router = express.Router();
const app = express();
const popData = require("../controllers/fetch");
const getData = require("../controllers/retrive");
const getUno = require ("../controllers/findone");
var writeNote = require ("../controllers/notefetch");
var path = require("path");


router.get('/find', function (req, res){
    console.log("popdata Route")
    popData();
})

router.get('/articles', function(req, res){
    getData(res);
})

router.post('/articles/:id', function(req, res){
      console.log("im really sad")
      var id = req.params.id;
      console.log(req.body);
      console.log(id);
      writeNote(req, id)
})

router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

router.get("/note", function(req,res){
    let articleID = req.query.id;
    // getUno(res, articleID);
    res.sendFile(path.join(__dirname, "../public/note.html"))

})
module.exports = router;






