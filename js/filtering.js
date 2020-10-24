$(document).ready(function () {
    $("div").first().css({
        "color":"green",
        "border":"2px solid green"
    });

    $("div").last().css({
        "color":"gold",
        "border":"2px solid gold"
    });

    $("h6").eq(0).css(
        "background-color","orange",
       
    );

    $("h6").filter(".text").css(
        "background-color","gray",
       
    );

    $("h5").not(".lorem").css(
        "background-color","green",
       
    );


  
   
  
    
  
    
      
  })