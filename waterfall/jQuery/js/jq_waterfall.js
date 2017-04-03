/**
 * Created by pjj on 2017/3/23.
 */
window.onload = function(){

    waterfall();

    window.onscroll = function(){
        if(checkScroll()){
            var $oPin = $('<li>').addClass('box').appendTo( $( "#main" ) );
            var $oBox = $('<div>').addClass('pics').appendTo( $oPin );
            $('<img>').attr('src','./images/' + parseInt(Math.random()*10 +Math.random()*10) + '.jpg' ).appendTo($oBox);

            waterfall();
        }
    }
};

function waterfall(){
    var $aPin = $( "li" );

    /*var iPinW = $aPin.eq( 0 ).width();// һ�����pin�Ŀ�
    var num = Math.floor( $( window ).width() / iPinW );//ÿ���������ɵ�pin���������ڿ�ȳ���һ������ȡ�
    //oParent.style.cssText='width:'+iPinW*num+'px;margin:0 auto;';//���ø���������ʽ������+�Զ�ˮƽ��߾�
    $( "#main" ).css({
        'width:' : iPinW * num,
        'margin': '0 auto'
    });*/

    var pinHArr=[];//���ڴ洢 ÿ���е����п����ӵĸ߶ȡ�
    $aPin.each( function( index, value ){
        var pinH = $aPin[index].offsetHeight;
        if( index < 5 ){
            pinHArr[ index ] = pinH; //��һ���е�num�����pin ����ӽ�����pinHArr
        }else{
            var minH = Math.min.apply( null, pinHArr );//����pinHArr�е���СֵminH
            var minHIndex = pinHArr.indexOf(minH);
            $( value ).css({
                'position': 'absolute',
                'top': minH + 'px',
                'left': $aPin[minHIndex].offsetLeft + 'px'
            });
            //���� ��С��Ԫ�صĸ� + ����ϵ�aPin[i]����
            pinHArr[ minHIndex ] += $aPin[index].offsetHeight;//��������˿�����и�
        }
    });
}

function checkScroll(){
    var $aPin = $( "li" );
    var lastPinH = $aPin.last().get(0).offsetTop + Math.floor($aPin.last().height()/2);//������������ӿ����waterfall()���ĸ߶ȣ����һ�����ľ�����ҳ����+����ߵ�һ��(ʵ��δ�����׾Ϳ�ʼ����)
    var scrollTop = $( window ).scrollTop(); //ע����������
    var documentH = $( document ).width();//ҳ��߶�
    return (lastPinH < scrollTop + documentH ) ? "true" : "false";//����ָ���߶Ⱥ� ����true������waterfall()����
}
