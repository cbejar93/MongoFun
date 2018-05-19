var axios = require("axios");
var cheerio = require("cheerio")
var db = require("../models/index");



function scraper (){
    axios.get("https://www.nytimes.com/?WT.z_jog=1&hF=t&vS=undefined").then(function(res){
        var $ = cheerio.load(res.data);
        $(".theme-summary").each(function(i, element){
            var result = [];
            
            var title = $(this).children("h2").children("a").text();
            var summary = $(this).children("p").text();
            var url = $(this).children("h2").children("a").attr("href");
            

            if( title && summary){
                result.push({
                    title: title,
                    summary: summary,
                    url: url
                })
                console.log(result);
                return result 
            }
            

        })
        
    })
}

module.exports= scraper;