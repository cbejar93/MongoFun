
$("#scrape").on("click", function(){
        console.log("hello")
        $.ajax({
            dataType: "json",
            url: "http://localhost:8080/articles",
            success: function(data){
                // console.log(data);
                for (var i = 0; i < data.length; i++) {
                    // Display the apropos information on the page
                    $("#articles").append("<div class='card mb-3'><div class='card-body'><h5 class='card-title'>"+ data[i].title + "</h5><p class='card-text'>"+data[i].summary+"</p><a href='"+data[i].url+"' class='btn btn-primary'>Read Article</a><button type='button' value="+data[i]._id+" data-toggle='modal' data-target='#exampleModal' class='btn btn-primary article-btn'>Leave Comment</button></div></div>");
                  }
            }
          });
})


$(".article-btn").on("click", function(){
    
   console.log("inside 2nd on click")
    id = $(this).attr("value");
    
})

$("#note").on("click", function(){
    console.log(id);
})
