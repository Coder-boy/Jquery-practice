
$(document).ready(function () {
    $("p").dblclick(function () {
        $(this).hide(1000);
    });

    $("h2").mouseenter(function () {
        alert("hi");
    });

    $("h4").hover(function () {
        alert("hello")
    },
    function () {
        alert("Bye")
    });

    $("input").focus(function () {
        $(this).css("background","#ddd")
    });

    $("h3").on({
        mouseenter:function () {
            $(this).css("background-color" , "green", "color" , "white");
        },
        mouseleave:function () {
            $(this).css("background-color" , "red" )
        },
        click:function () {
            $(this).css("background-color" , "yellow")
        }
    });

    $("#hide").click(function () {
        $("p").hide(5000);
    });

    $("#show").click(function () {
        $('p').show('slow');
    });
    $("#click").click(function () {
        $('p').toggle(1000);
    })
});