/**
 * Created by pjj on 2017/3/28.
 */
window.onload = function(){
    var screen0 = document.getElementById('screen0'),   //��ȡ����ʾ������
        screen1 = document.getElementById('screen1');   //��ȡ����ʾ������
    screen0.value = null;
    screen1.value = null;
    calculate(screen0, screen1);
};

function calculate(screen0,screen1){
    var box = document.getElementById('main'), //��ȡ��ť����
        count = 0;                             //��¼��ʾ���ַ������ָ���

    box.onclick = function(e){
        var symbol = e.target.innerText;           //��ȡ��ť�ַ�
        if((screen1.value + symbol).length > 40){
            alert('Content exceeds the maximum length!');
            return null;
        }
        //����
        if(symbol == 'C'){
            count = 0;
            screen0.value = null;
            screen1.value = null;
        }
        //���ʽ
        else if(symbol != '='){
            if(symbol == 'DEL'){
                if(screen1.value == null){
                    count = 0;
                }else{
                    screen1.value = screen1.value.slice(0,-1);
                    count--;
                }
            }else{
                screen1.value += symbol;
            }
        }
        //������
        else if(symbol == '='){
            screen0.value = screen1.value;
            screen1.value = test(screen1.value);
        }
    }
}

function test(text) {
    var index = 0;   //��¼��������

        //���ȼ�������������
    if(text.lastIndexOf("(") > -1){
        index = text.lastIndexOf("(");
        var endIndex = text.indexOf(")", index);
        if(endIndex > -1) {
            var result = test(text.substring(index + 1, endIndex));
            return test(text.substring(0, index) + result + text.substring(endIndex + 1));
        }

    }else if(text.indexOf("+") >-1){
        index = text.indexOf("+");
        return test(text.substring(0, index)) + test(text.substring(index + 1));

    }else if(text.lastIndexOf("-") > -1){
        index = text.lastIndexOf("-");
        return test(text.substring(0, index)) - test(text.substring(index + 1));

    }else if(text.indexOf("*") > -1){
        index = text.indexOf("*");
        return test(text.substring(0, index)) * test(text.substring(index + 1));

    }else if(text.lastIndexOf("/") > -1){
        index = text.lastIndexOf("/");
        return test(text.substring(0, index)) / test(text.substring(index + 1));

    }else{
        return Number(text);
    }
}

