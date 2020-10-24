$(document).ready(function () {
    $("#btn1").click(function () {
      $("div").addClass("box space");
    
    });

    $("#btn2").click(function () {
        $("div").removeClass("box space");
      
    });

    $("#btn3").click(function () {
        $("div").toggleClass("box space");
      
    });

  
    
})