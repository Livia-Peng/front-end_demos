/**
 * Created by pjj on 2016/5/11.
 */

//二级导航条效果
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