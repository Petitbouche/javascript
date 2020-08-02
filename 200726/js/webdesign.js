$(function(){
    $('.menu>ul>li').hover(function(){
        $(this).children('.sub_menu').stop().slideToggle();
    });
});


$(function(){
    $('.menu>ul>li').hover(function(){
        $(this).children('.sub_menu').stop().slideToggle();
    });
    //메뉴
    //이미지 페이드인아웃
    //gt() 인덱스 번호로 요소를 찾기
    $('#slide_box>ul>li:gt(0)').hide();
    setInterval(function(){
        $('#slide_box>ul>li:first').fadeOut(1000).next().fadeIn(1000).end().appendTo('#slide_box>ul');
    },3000);
});



$('.content').children().hide();
$('.tab1').fadeIn();
$('.tab_button>li:first').css('background','white');    //모든 택메뉴 내용 숨기고 공지사항버튼만 색상변경

$('.tab_button>li:last').click(function(){
    $('.tab_button>li:first').css('background','darkgrey');
    $(this).css('background','white');
    $('.tab1').hide();
    $('.tab2').fadeIn();
});  //두번째 탭버튼 눌렀을 때

$('.tab_button>li:last').click(function(){
    $('.tab_button>li:first').css('background','darkgrey');
    $(this).css('background','white');
    $('.tab2').hide();
    $('.tab1').fadeIn();
});  //첫번째 탭버튼 눌렀을 때



$(function(){
    $('#slide_box>ul>li:gt(0)').hide();
    setInterval(function(){
        $('#slide_box>ul>li:first').fadeOut(1000).next().fadeIn(1000).end().appendTo('#slide_box>ul');
    },3000);

    $('.팝업버튼').click(function(){
        $('#popup').show();
    });
    $('.팝업버튼').click(function(){
        $('#popup').hide();
    });
});
