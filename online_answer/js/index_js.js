/**
 * Created by pjj on 2017/1/19.
 */

$(document).ready(function() {
    $(".main-course-box").click(function() {
        $(this).siblings(".main-course-box").css("background-color","#7c7777");
        $(this).css("background-color","#FF8800");
    });
});

//课程对应章节
function course0_chapter0(){
    var chapter1=document.getElementById('chapter1'),
        chapter2=document.getElementById('chapter2');
    chapter2.style.display='none';
    chapter1.style.display='block';
}
function course1_chapter1(){
    var chapter1=document.getElementById('chapter1'),
        chapter2=document.getElementById('chapter2');
    chapter1.style.display='none';
    chapter2.style.display='block';
}

//课程上下页切换
function course0_click(){
    var course1=document.getElementById('course1'),
        course2=document.getElementById('course2');
    course2.style.display='none';
    course1.style.display='block';
}
function course1_click(){
    var course1=document.getElementById('course1'),
        course2=document.getElementById('course2');
    course1.style.display='none';
    course2.style.display='block';
}


//章节上下页切换
function chapter0_click(){
    var uls=document.getElementsByTagName('ul');
    uls[0].style.display='block';
    uls[1].style.display='none';
}
function chapter1_click(){
    var uls=document.getElementsByTagName('ul');
    uls[0].style.display='none';
    uls[1].style.display='block';
}



/*
$(document).ready(function() {
    $(".course").click(function() {
        $(this).siblings(".course").css("background-color","#333333");
        $(this).css("background-color","#000");
        $(".chapter li").css("background-color","#333333");
        $(this).next(".chapter").slideToggle(300).siblings(".chapter").slideUp("slow");
        $(".nav_2>.chapter").not($(this).next(".chapter")).slideUp("slow");
    });
});
$(document).ready(function(){
    $(".chapter li").click(function(){
        $(this).siblings(".chapter li").css("background-color","#333333");
        $(this).css("background-color","#000000");
    });
});
*/