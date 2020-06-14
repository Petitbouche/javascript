// function abc(){
//     document.getElementById("demo").innerHTML=Boolean(10>9);
//     //boolean : 참 or 거짓 만 표기한다
// }



// $(function(){
//     $('.text').css("color","red").css("fontSize","50px");
// });



// $(function(){
//     var items = $("li");
//     // li 요소를 모두 선택하여 변수 items에 저장함
//     $("button").on("click", function(){
//         $("#len").text("저장된 <li>요소의 총 개수는 "+items.length+"개 입니다.");
//     });
// });



// $(function(){
//     var abc = $("li");
//     $('button').click(function(){
//         $('#len').text("저장된 li 요소의 총 개수는 "+abc.length+"개 입니다.")
//     });
// });

// $(function(){
//     $('button').click(function(){
//         // $('#list').append("<li>li요소를 추가하겠습니다.</li>");   // append: 뒤에 추가
//         $('#list').prepend("<li>li요소를 추가하겠습니다.</li>");   // append: 앞에 추가

//     });
// });



/* <sample02> */


// $(function(){
//     $('button').on("click",function(){
//         $("#firstRow").after("<tr><td>새로운 행이에요!</td></tr>"); 
//         //before: 바로 앞, after: 바로 뒤
//     });
// });

// $(function(){
//     $('button').on("click",function(){
//         $("<td>새로운 셀이에요!</td>").insertBefore("#target"); 
//         //insertBefore, insertAfter : 타겟을 지정하여 추가하는 방식
//     });
// });




/* <sample03> */

// $(function(){
//     $("button").on("click", function(){
//         //class가 "content"인 각 요소를 포함하는 새로운 요소를 추가함
//         $(".content").wrap("<div class='wrapper'></div>");
//     });
// });



/* <sample04> */

// $(function(){
//     $('#btn01').click(function(){
//         $('#wrap').fadeOut(3000).stop();
//     });
//     $('#btn02').click(function(){
//         $('#wrap').fadeIn(3000).stop();       //stop:반복되지 않게
//     });
// });

// $(function(){
//     $('#btn01').click(function(){
//         $('#wrap').css("left","200px");
//     });
//     $('#btn02').click(function(){
//         $('#wrap').css("top","200px");
//     });
// });

$(function(){
    $('#btn01').click(function(){
        $('#wrap').slideUp();
    });
    $('#btn02').click(function(){
        $('#wrap').slideDown();
    });
});