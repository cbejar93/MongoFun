var axios = require("axios");
var cheerio = require("cheerio")
var db = require("../models/index");



function scraper (){
    return axios.get("https://www.nytimes.com/?WT.z_jog=1&hF=t&vS=undefined").then(function(res){
        var $ = cheerio.load(res.data);
        var result = [];
        $(".theme-summary").each(function(i, element){
        
            
            var title = $(this).children("h2").children("a").text();
            var summary = $(this).children("p").text();
            var url = $(this).children("h2").children("a").attr("href");
            // console.log(result);

            if( title && summary && url){
                result.push({
                    title: title,
                    summary: summary,
                    url: url
                })
            }

        })
        return result; 
    })
}

module.exports= scraper;