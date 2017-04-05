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
        count = 0,                             //��¼��ʾ���ַ������ָ���
        bracket = false;                       //�Ƿ�����������

    box.onclick = function(e){
        var symbol = e.target.innerText;
        if((screen1.value + symbol).length > 40){
            alert('Content exceeds the maximum length!');
            return null;
        }
        //����
        if(symbol == 'C'){
            bracket = false;
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
            }else if(symbol == '()'){
                if(!bracket){
                    screen1.value += '(';
                    bracket = true;
                }else{
                    screen1.value += ')';
                    bracket = false;
                }
            }else if(symbol == '��'){
                screen1.value += '*';
            }else if(symbol == '��'){
                screen1.value += '/';
            }else{
                screen1.value += symbol;
            }
        }
        //������
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