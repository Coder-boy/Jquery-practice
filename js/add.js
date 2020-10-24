$(document).ready(function () {
    $("#btn1").click(function () {
      $(".lorem1").append(" Hi ");
    
    });
    
    $("#btn2").click(function () {
        $(".lorem1").prepend(" Hi ");
      
    });

    $("#btn3").click(function () {
        $(".lorem3").before(" hwllo ");
      
    });

    $("#btn4").click(function () {
        $(".lorem3").after(" hwllo ");
      
    })

    
})