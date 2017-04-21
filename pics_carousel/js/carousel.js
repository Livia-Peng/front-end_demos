/**
 * Created by pjj on 2017/3/22.
 */

window.onload = function(){
    var box = document.getElementById('box');
    var pics = document.getElementById('pics');
    var dots = document.getElementById('dots').getElementsByTagName('span');
    var pre = document.getElementById('pre');
    var next = document.getElementById('next');
    var index=1;
    var turned = false;
    var time;

    //图片切换函数
    function turn(offset){
        turned = true;
        var new_left = parseInt(pics.style.left) + offset;
        var total_time = 300;                               //位移总时间
        var interval = 10;                                  //每次位移间隔时间
        var speed = offset/(total_time/interval);           //位移速度——每次位移量

        function go(){
            if((speed < 0 && parseInt(pics.style.left) > new_left) || (speed > 0 && parseInt(pics.style.left) < new_left)){
                pics.style.left = parseInt(pics.style.left) + speed +'px';
                setTimeout(go,interval);
            }else{
                turned = false;
                pics.style.left = new_left +'px';
                if( new_left < -4200){
                    pics.style.left = -600 +'px';
                }
                else if( new_left > -600){
                    pics.style.left = -4200 +'px';
                }
            }
        }
        go();
    }

    //按钮切换样式
    function show_dots(){
        for(var i = 0; i < dots.length; i++){
            if(dots[i].className == 'on'){
                dots[i].className = '';
                break;
            }
        }
        dots[index - 1].className = 'on';
    }
    //按钮切换实现
    for(var i = 0; i < dots.length; i++){
        if(!turned){
            dots[i].onclick= function(){
                if(this.className == 'on'){
                    return;
                }
                var my_index = parseInt(this.getAttribute('index'));   //注意! index是自定义属性
                var offset = -600 * (my_index - index);

                turn(offset);
                index = my_index;
                show_dots();
            }
        }
    }


    //箭头切换
    next.onclick = function(){
        if(!turned){
            if(index == 7){
                index = 1;
            }else{
                index += 1;
            }
            show_dots();
            turn(-600);
        }
    };
    pre.onclick = function(){
        if(!turned){
            if(index == 1){
                index = 7;
            }else{
                index -= 1;
            }
            show_dots();
            turn(600);
        }
    };

    //定时动画
    function play(){
        time = setInterval(function(){
            next.onclick();
        },3000);
    }
    //动画停止
    function stop(){clearInterval(time);}

    play();
    box.onmouseover = stop;
    box.onmouseout = play;


};






