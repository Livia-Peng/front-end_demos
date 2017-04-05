/**
 * Created by pjj on 2017/3/28.
 */
window.onload = function(){
    var screen0 = document.getElementById('screen0'),   //获取上显示器内容
        screen1 = document.getElementById('screen1');   //获取下显示器内容

    screen0.value = null;
    screen1.value = null;
    calculate(screen0, screen1);
};

function calculate(screen0,screen1){
    var box = document.getElementById('main'), //获取按钮盒子
        count = 0,                             //记录显示器字符或数字个数
        bracket = false;                       //是否已有左括号

    box.onclick = function(e){
        var symbol = e.target.innerText;
        if((screen1.value + symbol).length > 40){
            alert('Content exceeds the maximum length!');
            return null;
        }
        //清零
        if(symbol == 'C'){
            bracket = false;
            count = 0;
            screen0.value = null;
            screen1.value = null;
        }
        //表达式
        else if(symbol != '='){
            if(symbol == 'DEL'){
                if(screen1.value == null){
                    count = 0;
                }else{
                    screen1.value = screen1.value.slice(0,-1);
                    count--;
                }
            }else if(symbol == '()'){
                if(!bracket){
                    screen1.value += '(';
                    bracket = true;
                }else{
                    screen1.value += ')';
                    bracket = false;
                }
            }else if(symbol == '×'){
                screen1.value += '*';
            }else if(symbol == '÷'){
                screen1.value += '/';
            }else{
                screen1.value += symbol;
            }
        }
        //计算结果
        else if(symbol == '='){
            screen0.value = screen1.value;
            var text = screen1.value;

            if(!text){
                return null;
            }else{
                var result = null,
                    sum = null,
                    arr = [],
                    flag = 0;
                for(var i = 0; i < text.length; i++){
                    if(typeof text[i] == 'number'){
                        sum += text[i];
                    }else{
                        arr.push(sum);
                        arr.push(text[i]);
                        flag = i;
                        sum = null;
                    }
                }
            }
        }
    }
}