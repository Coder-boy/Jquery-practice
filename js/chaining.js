$(document).ready(function () {
    $(".btn").click(function () {
        $(".box").css("background" , "orange")
        .slideUp(1000)
        .slideDown(1000)
        .hide(1000)
    })
})