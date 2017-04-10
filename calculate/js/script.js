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
        var symbol = e.target.innerText;           //获取按钮字符
        if((screen1.value + symbol).length > 40){
            alert('Content exceeds the maximum length!');
            return null;
        }
        //清零
        if(symbol == 'C'){
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
            if(!screen1.value){
                return null;
            }else{
                screen0.value = screen1.value;
                screen1.value = count(screen1.value);
            }
        }
    }
}

function count(text) {
    //首先寻找最右左括号
    var index1 = text.lastIndexOf("(");
    if(index > -1) {
        //寻找同组右括号
        var endIndex = text.indexOf(")", index1);
        if(endIndex > -1) {
            //算出括号中的结果
            var result = count(text.substring(index1 + 1, endIndex));
            //继续计算表达式
            text = count(text.substring(0, index1) + result + text.substring(endIndex + 1));
        }
    }else{
        var index2 = text.indexOf("+");
        if (index2 > -1) {
            text = count(text.substring(0, index2)) + count(text.substring(index2 + 1));
        }else{
            var index3 = text.lastIndexOf("-");
            if (index3 > -1) {
                text = count(text.substring(0, index3)) -count(text.substring(index3 + 1));
            }else{
                var index4 = text.lastIndexOf("*");
                if (index4 > -1) {
                    text = count(text.substring(0, index4)) * count(text.substring(index4 + 1));
                }else{
                    var index5 = text.lastIndexOf("/");
                    if (index5 > -1) {
                        text = count(text.substring(0, index5)) / count(text.substring(index5 + 1));
                    }
                }
            }
        }
    }
    return text;
}