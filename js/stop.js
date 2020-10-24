$(document).ready(function () {
    $(".btn").click(function () {
        $(".box").slideToggle(2000);
    });

    $("#stop").click(function () {
        $(".box").stop(true, true)
    });

    $("#stop1").click(function () {
        $(".box").stop()
    });

})