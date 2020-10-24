$(document).ready(function () {
   $("span").parent().css({
       "color" : "gray",
       "border" : "2px solid gray"
   });

   $("span").parents().css({
    "color" : "blue",
    "border" : "2px solid blue"
    });

    $("span").parents("ul").css({
        "color" : "gold",
        "border" : "2px solid gold"
    });

    $("span").parentsUntil("div").css({
        "color" : "green",
        "border" : "2px solid green"
    })



  
  
    
})