$(document).ready(function () {
    $(".btn").click(function () {
        $(".box").animate({
            left:'200px',
            width:'+=200px',
            height:'+=200px',
            
        });
    });

    $(".btn1").click(function () {
        $(".box1").animate({
            left:'200px',
            width:'-=50px',
            height:'-=50px',
            
        });
    });

    $(".btn2").click(function () {
        $(".box2").animate({
            
            height:'toggle',
            
            
        });
    });

    $(".btn3").click(function () {
      
        var box = $(".box3");
            box.animate({height:'300px', opacity:'0.5'}, "slow");
            box.animate({backgroundColor:'black'}, "fast");
            box.animate({width:'300px', opacity:'0.7'}, "slow");
            box.animate({height:'100px', opacity:'0.4'}, "slow");
            box.animate({width:'100px', opacity:'1'}, "slow");
            
        
    });
    $(".btn4").click(function () {
        const an = $('.box4');
        an.animate({height:'300px'},'slow');
        an.animate({width:'300px'},'slow');
        an.animate({fontSize:'50px'},'flow')
    });

    $(".btn5").click(function () {
       $(".box5").animate({
           width : '500px',
           height : '400px',
       },3000).animate({
           fontSize : '30px'
       },3000).fadeOut();
    });
})