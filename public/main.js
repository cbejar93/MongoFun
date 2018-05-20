
$("#scrape").on("click", function(){
        console.log("hello")
        $.ajax({
            dataType: "json",
            url: "http://localhost:8080/articles",
            // data: data,
            success: function(data){
                console.log(data);
                // data[i]._id
                for (var i = 0; i < data.length; i++) {
                    // Display the apropos information on the page
                    $("#articles").append("<div class='card mb-3'><div class='card-body'><h5 class='card-title'>"+ data[i].title + "</h5><p class='card-text'>"+data[i].summary+"</p><a href='"+data[i].url+"' class='btn btn-primary'>Read Article</a><a href='/note' class='btn btn-primary'>Leave Comment</a></div></div>");
                  }
            }
          });
})