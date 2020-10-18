$(document).ready(function () {
    $("#fade-in").click(function () {
        $(".box1").fadeIn()
        $(".box2").fadeIn('slow')
        $(".box3").fadeIn(5000)
    });

    $("#fade-out").click(function () {
        $(".box1").fadeOut()
        $(".box2").fadeOut('slow')
        $(".box3").fadeOut(5000)
    });

    $("#fade-toggle").click(function () {
        $(".box1").fadeToggle()
        $(".box2").fadeToggle('slow')
        $(".box3").fadeToggle(5000)
    });

    $("#fade-to").click(function () {
        $(".box1").fadeTo('slow', 0.3)
        $(".box2").fadeTo('slow', 0.5)
        $(".box3").fadeTo('slow' , 0.7)
    })
})