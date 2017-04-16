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
        count = 0;                             //记录显示器字符或数字个数

    box.onclick = function(e){
        var symbol = e.target.innerText;       //获取按钮字符

        //内容是否超过允许长度
        if((screen1.value + symbol).length > 40){
            alert('Content exceeds the maximum length!');
            return null;
        }
        if(symbol == 'C' ){          //清零
            count = 0;
            screen0.value = null;
            screen1.value = null;
        }else if(symbol != '='){   //表达式
            if(count == -1){
                screen0.value += "=" + screen1.value;
                screen1.value = symbol;
                count = 1;
            }else if(symbol == 'DEL'){
                if(screen1.value == null){
                    count = 0;
                }else{
                    screen1.value = screen1.value.slice(0,-1);
                    count--;
                }
            }else{
                screen1.value += symbol;
            }
        }else if(symbol == '='){   //计算结果
            screen0.value = screen1.value;
            screen1.value = test(screen1.value );
            count = -1;
        }
    }
}

function test(text ) {
    var index = 0;   //记录符号索引

    while(text){
        //首先计算括号内内容
        if(text.lastIndexOf("(") > -1){
            index = text.lastIndexOf("(");
            var endIndex = text.indexOf(")", index);
            if(endIndex > -1) {
                var result = Math.formatFloat(test(text.substring(index + 1, endIndex)) ,2);
                return Math.formatFloat(test(text.substring(0, index) + result + text.substring(endIndex + 1)) ,2);
            }

        }else if(text.indexOf("+") >-1){
            index = text.indexOf("+");
            return Math.formatFloat(test(text.substring(0, index)) + test(text.substring(index + 1)) ,2);

        }else if(text.lastIndexOf("-") > -1){
            index = text.lastIndexOf("-");
            if(text[index-1] == '*'){
                return Math.formatFloat(test(text.substring(0, index-1)) * test(text.substring(index)) ,2);
            }else if(text[index-1] == '/'){
                return Math.formatFloat(test(text.substring(0, index-1)) / test(text.substring(index)) ,2);
            }else{
                return Math.formatFloat(test(text.substring(0, index)) - test(text.substring(index + 1)) ,2);
            }

        }else if(text.lastIndexOf("*") > -1){
                index = text.lastIndexOf("*");
            return Math.formatFloat(test(text.substring(0, index)) * test(text.substring(index + 1)) ,2);

        }else if(text.lastIndexOf("/") > -1){
            index = text.lastIndexOf("/");
            return Math.formatFloat(test(text.substring(0, index)) / test(text.substring(index + 1)) ,2);

        }else{
            return Math.formatFloat(text,2);
        }
    }

    return null;
}

Math.formatFloat = function (exp, digit){
    var m = Math.pow(10, digit);
    return parseInt(exp*m, 10)/m;
};
