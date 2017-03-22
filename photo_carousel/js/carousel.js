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

    //��ͷ�л�����
    function turn(offset){
        turned = true;
        var new_left = parseInt(pics.style.left) + offset;
        var total_time = 300;                               //λ����ʱ��
        var interval = 10;                                  //ÿ��λ�Ƽ��ʱ��
        var speed = offset/(total_time/interval);           //λ���ٶȡ���ÿ��λ����

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

    //��ť�仯ʵ��
    function show_dots(){
        for(var i = 0; i < dots.length; i++){
            if(dots[i].className == 'on'){
                dots[i].className = '';
                break;
            }
        }
        dots[index - 1].className = 'on';
    }

    //��ʱ����
    function play(){
        time = setInterval(function(){
            next.onclick();
        },3000);
    }

    //����ֹͣ
    function stop(){clearInterval(time);}

    play();
    box.onmouseover = stop;
    box.onmouseout = play;

    //��ͷ�л�
    next.onclick = function(){
        if(index == 7){
            index = 1;
        }else{
            index += 1;
        }
        show_dots();
        if(!turned){
            turn(-600);
        }
    };
    pre.onclick = function(){
        if(index == 1){
            index = 7;
        }else{
            index -= 1;
        }
        show_dots();
        if(!turned){
            turn(600);
        }
    };

    //��ť�л�
    for(var i = 0; i < dots.length; i++){
        dots[i].onclick= function(){
            if(this.className == 'on'){
                return;
            }
            var my_index = parseInt(this.getAttribute('index'));   //ע��! index���Զ�������
            var offset = -600 * (my_index - index);

            if(!turned){
                turn(offset);
            }
            index = my_index;
            show_dots();
        }
    }
};






