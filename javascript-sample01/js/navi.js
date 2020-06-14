// $(function(){
//     $('.menu01>a').hover(function(){
//         $('.subNav').fadeIn();
//     });
// });


// $(function(){
//     $('.menu01>a').mouseenter(function(){
//         $('.subNav').stop().slideDown();
//     });
//     $('.menu01>a').mouseleave(function(){
//         $('.subNav').stop().slideUp();
//     });
// });




$(function(){
    $('.menu01').mouseenter(function(){
        $(".sub-navi").slideDown();
    });
    $('.menu01').mouseleave(function(){
        $(".sub-navi").slideUp();
    });
});