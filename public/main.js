
$("#scrape").on("click", function(){
        console.log("hello")
        $.ajax({
            dataType: "json",
            url: "http://localhost:8080/articles",
            success: function(data){
                // console.log(data);
                for (var i = 0; i < data.length; i++) {
                    // Display the apropos information on the page
                    $("#articles").append("<div class='card mb-3'><div class='card-body'><h5 class='card-title'>"+ data[i].title + "</h5><p class='card-text'>"+data[i].summary+"</p><a href='"+data[i].url+"' class='btn btn-primary'>Read Article</a><button type='button' value='"+data[i]._id+"' data-toggle='modal' data-target='#exampleModal' class='btn btn-primary article-btn'>Leave Comment</button></div></div>");
                  }
            }
          });
})

$("#database").on("click", function(){
    $.ajax({
        dataType: 'json',
        url: `http://localhost:8080/find`,
        success: function(err){
            if (err) throw err;
        }
    })
});

$(document).on("click", ".article-btn", function (){
    console.log("indside 2nd on-click");
    var id = $(this).attr("value");
    console.log(id);
    $(".card-body").append("<textarea class='form-control mt-2' id='target' aria-label='With textarea'></textarea><button class='mt-2' id='target1'>Submit</button>");
    $(document).on("click", "#target1", function(){
            console.log("You've submited a comment");
            var comment = $("#target").val().trim()
            console.log(comment);
            console.log(id);
            $.ajax({
                type: 'POST',
                data: comment,
                url: `http://localhost:8080/articles/${id}`,
                success: console.log("You have made it!")
            })
    })
    
})

// $("#comment").on("click", function(){
//     console.log("You've submited a comment");
//     var comment = $("#target").val().trim()
//     console.log(comment);
//     var url = req.query.id;
//     console.log(url);
//     console.log("underURL");
// });

