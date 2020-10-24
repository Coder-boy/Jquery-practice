$(document).ready(function () {
    $(".btn").click(function () {
       alert("text :" + $(".box").text())
        
    });
    $(".btn1").click(function () {
        alert("text :" + $(".box").html())
    });
    $("#btn2").click(function () {
       alert($("#text").val())
    });
    $("#btn3").click(function () {
        alert($("#link").attr("href"))
     });
})