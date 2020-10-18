$(document).ready(function () {
   $('button').click(function () {
       $('p:first').hide();
   });

   $('#hide').click(function () {
       $('*').hide();//hide all elements in html
   });

   $('.hide-btn').click(function () {
       $(this).hide();
   });

   $('.text').click(function () {
       $(this).hide();
   });

   $('.last-list').click(function () {
       $('ul li:last-child').hide();
   });

   $('.second-list').click(function () {
       $('ul li:nth-child(2)').hide();
   });

   $('#jq').click(function () {
       $('[href]').hide();
   });

   
   $('#goo').click(function () {
    $('a[target="_blank"]').hide();
});

   

});