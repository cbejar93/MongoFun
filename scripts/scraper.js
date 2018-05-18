var axios = require("axios");
var cheerio = require("cheerio")
var db = require("../models/index");

function scraper (){
    axios.get("https://www.nytimes.com/?WT.z_jog=1&hF=t&vS=undefined").then(function(res){
        var $ = cheerio.load(res.data);
        $(".theme-summary").each(function(i, element){
            var result = {};


        })
    })
}