var swiper = new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });




// main

var images = ["sonata01.jpg","sonata02.jpg","sonata03.jpg"];
    $(function(){
        var i=0;
        $("#background-changer").css("background-image","url(./car_img/"+images[i]+")");

        setInterval(function(){
            i++; if(i==images.length){
                i=0;
            }
            $("#background-changer").fadeOut("slow",function(){
                    $(this).css("background-image","url(./car_img/"+images[i]+")");
                    $(this).fadeIn("slow");
            });
        },2000);
    });



    

// color_tab

$(function(){
    $(".wh").click(function(){
        $(".tab01-content").css("display","block");
        $(".tab02-content").css("display","none");
        $(".tab03-content").css("display","none");
        $(".tab04-content").css("display","none");
        $(".tab05-content").css("display","none");
        $(".tab06-content").css("display","none");
    });
    $(".bl").click(function(){
        $(".tab02-content").css("display","block");
        $(".tab01-content").css("display","none");
        $(".tab03-content").css("display","none");
        $(".tab04-content").css("display","none");
        $(".tab05-content").css("display","none");
        $(".tab06-content").css("display","none");
    });
    $(".bp").click(function(){
        $(".tab03-content").css("display","block");
        $(".tab01-content").css("display","none");
        $(".tab02-content").css("display","none");
        $(".tab04-content").css("display","none");
        $(".tab05-content").css("display","none");
        $(".tab06-content").css("display","none");
    });
    $(".ab").click(function(){
        $(".tab04-content").css("display","block");
        $(".tab01-content").css("display","none");
        $(".tab03-content").css("display","none");
        $(".tab02-content").css("display","none");
        $(".tab05-content").css("display","none");
        $(".tab06-content").css("display","none");
    });
    $(".cd").click(function(){
        $(".tab05-content").css("display","block");
        $(".tab01-content").css("display","none");
        $(".tab03-content").css("display","none");
        $(".tab04-content").css("display","none");
        $(".tab02-content").css("display","none");
        $(".tab06-content").css("display","none");
    });
    $(".dk").click(function(){
        $(".tab06-content").css("display","block");
        $(".tab01-content").css("display","none");
        $(".tab03-content").css("display","none");
        $(".tab04-content").css("display","none");
        $(".tab05-content").css("display","none");
        $(".tab02-content").css("display","none");
    });
});


