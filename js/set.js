$(document).ready(function () {
    $("#btn1").click(function () {
      $(".lorem1").text("Hi");
    
    });

    $("#btn2").click(function () {
        $(".lorem2").html("<h1>Hello</h1>");
      
    });

    $("#btn3").click(function () {
        $(".lorem3").val("Enter your name");
      
    });

    $("#btn4").click(function () {
        $("#link").attr("href" , "http://ashrafahmed.000webhostapp.com/")
        .html("Ashraf Ahmed")
      
    })
})