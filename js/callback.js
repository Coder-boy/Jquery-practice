
$(document).ready(function () {

    $(".btn").click(function () {
        $(".box").hide("slow",function () {
            alert("you hide this element")
        });
    });
    $(".btn2").click(function () {
        $(".box2").hide("slow");
        alert("hello")
    });

    

})