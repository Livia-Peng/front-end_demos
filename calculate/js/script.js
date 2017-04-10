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
    //����Ѱ������������
    var index1 = text.lastIndexOf("(");
    if(index > -1) {
        //Ѱ��ͬ��������
        var endIndex = text.indexOf(")", index1);
        if(endIndex > -1) {
            //��������еĽ��
            var result = count(text.substring(index1 + 1, endIndex));
            //����������ʽ
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