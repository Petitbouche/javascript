// var d = new Date();

// var a = d.getFullYear();
// var b = d.getMonth()+1;

// document.getElementById("toDay").innerHTML = d;
// document.getElementById("a").innerHTML = a;
// document.getElementById("b").innerHTML = b;




// var date = new Date();
// var day;

// switch(date.getDay()){
//     case 0:
//         day="일";
//         break;
//     case 1:
//         day="월";
//         break;
//     case 2:
//         day="화";
//         break;
//     case 3:
//         day="수";
//         break;
//     case 4:
//         day="목";
//         break;
//     case 5:
//         day="금";
//         break;
//     case 6:
//         day="토";
//         break;
// }

// document.write("오늘은"+day+"요일 입니다.");
// document.getElementById("toDay").innerHTML = day;




// var date = new Date();
// var days = ["일","월","화","수","목","금","토"];

// document.write("오늘은"+days[date.getDay()]+"요일입니다.");

// var strKor = "한글";
// var strEng = "abcABC";
// document.write(strKor.length+"<br>");    //2
// document.write(strEng.length);           //6




// document.write(Math.min()+"<br>");
// document.write(Math.min(1,10,-100,-10,1000,0)+"<br>");
// document.write(Math.min(1,10,-100,-10,"-1000",0)+"<br>");
// document.write(Math.min(1,10,-100,-10,"문자열",0));

// document.getElementById("demo1").innerHTML = Math.PI;          //반지름
// document.getElementById("demo2").innerHTML = Math.round(4.4);  //반올림
// document.getElementById("demo4").innerHTML = Math.max(1,10,100,1000,10000);
// document.getElementById("domo5").innerHTML = Math.random();


// //인수로 전달받은 값과 같거나 작은 수 중에서 가장 큰 정수
// document.write(Math.floor(10.95)+"<br>");    //10
// document.write(Math.floor(11.01)+"<br>");    //11
// document.write(Math.floor(-10.95)+"<br>");   //-11
// document.write(Math.floor(-11.01)+"<br>");   //-12

// //인수로 전달받은 값과 같거나 큰 수 중에서 가장 작은 정수
// document.write(Math.ceil(10.95)+"<br>");     //11
// document.write(Math.ceil(11.01)+"<br>");     //12
// document.write(Math.ceil(11)+"<br>");        //11
// document.write(Math.ceil(-10.95)+"<br>");    //-10
// document.write(Math.ceil(-11.01)+"<br>");    //-11





var imgArray = new Array();
imgArray[0] = "img/img01.jpg";
imgArray[1] = "img/img02.jpg";
imgArray[2] = "img/img03.jpg";
imgArray[3] = "img/img04.jpg";

function showImage(){  //function은 html에서 onload로 불러온다
    var imgNum = Math.round(Math.random()*3);
    var objImg = document.getElementById("introImg");
    objImg.src = imgArray[imgNum];
}