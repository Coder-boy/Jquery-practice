$(document).ready(function () {
  $("span").siblings().css({
      "color":"green",
      "border":"2px solid green"
  });

  $("span").siblings("p").css({
    "color":"blue",
    "border":"2px solid blue"
  });

  $("span").next().css({
    "color":"orange",
    "border":"2px solid orange"
  });

  $("a").nextAll().css({
    "color":"gold",
    "border":"2px solid gold"
  });

  $("h6").nextUntil().css({
    "color":"gray",
    "border":"2px solid gray"
  });

  $("h2").prev().css({
    "color":"brown",
    "border":"2px solid brown"
  });

  $("h1").prevAll().css({
    "color":"#222",
    "border":"2px solid #222"
  });

  $("button").prevUntil("h4").css({
    "color":"salmon",
    "border":"2px solid salmon"
  });

  

  
    
})