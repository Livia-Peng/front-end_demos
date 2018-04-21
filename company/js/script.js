/**
 * Created by pjj on 2017/4/20.
 */

window.onload = function(){
    var box = document.getElementById('box1');
    var pics = document.getElementById('pics');
    var dots = document.getElementById('dots').getElementsByTagName('span');
    var pre = document.getElementById('pre');
    var next = document.getElementById('next');
    var index=1;
    var turned = false;
    var time;

    function turn(offset){
        turned = true;
        var new_left = parseInt(pics.style.left) + offset;
        var total_time = 1000;                               //λ����ʱ��
        var interval = 10;                                  //ÿ��λ�Ƽ��ʱ��
        var speed = offset/(total_time/interval);           //λ���ٶȡ���ÿ��λ����

        function go(){
            if((speed < 0 && parseInt(pics.style.left) > new_left) || (speed > 0 && parseInt(pics.style.left) < new_left)){
                pics.style.left = parseInt(pics.style.left) + speed +'px';
                setTimeout(go,interval);
            }else{
                turned = false;
                pics.style.left = new_left +'px';
                if( new_left < -4500){
                    pics.style.left = -900 +'px';
                }
                else if( new_left > -900){
                    pics.style.left = -4500 +'px';
                }
            }
        }
        go();
    }

    function show_dots(){
        for(var i = 0; i < dots.length; i++){
            if(dots[i].className == 'on'){
                dots[i].className = '';
                break;
            }
        }
        dots[index - 1].className = 'on';
    }

    for(var i = 0; i < dots.length; i++){
        dots[i].onclick= function(){
            if(!turned){
                if(this.className == 'on'){
                    return;
                }
                var my_index = parseInt(this.getAttribute('index'));
                var offset = -900 * (my_index - index);

                turn(offset);
                index = my_index;
                show_dots();
            }
        }
    }

    next.onclick = function(){
        if(!turned){
            if(index == 5){
                index = 1;
            }else{
                index += 1;
            }
            show_dots();
            turn(-900);
        }
    };
    pre.onclick = function(){
        if(!turned){
            if(index == 1){
                index = 5;
            }else{
                index -= 1;
            }
            show_dots();
            turn(900);
        }
    };

    function play(){
        time = setInterval(function(){
            next.onclick();
        },3000);
    }

    function stop(){clearInterval(time);}

    play();
    box.onmouseover = stop;
    box.onmouseout = play;

};
