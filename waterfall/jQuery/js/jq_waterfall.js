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

    /*var iPinW = $aPin.eq( 0 ).width();// 一个块框pin的宽
    var num = Math.floor( $( window ).width() / iPinW );//每行中能容纳的pin个数【窗口宽度除以一个块框宽度】
    //oParent.style.cssText='width:'+iPinW*num+'px;margin:0 auto;';//设置父级居中样式：定宽+自动水平外边距
    $( "#main" ).css({
        'width:' : iPinW * num,
        'margin': '0 auto'
    });*/

    var pinHArr=[];//用于存储 每列中的所有块框相加的高度。
    $aPin.each( function( index, value ){
        var pinH = $aPin[index].offsetHeight;
        if( index < 5 ){
            pinHArr[ index ] = pinH; //第一行中的num个块框pin 先添加进数组pinHArr
        }else{
            var minH = Math.min.apply( null, pinHArr );//数组pinHArr中的最小值minH
            var minHIndex = pinHArr.indexOf(minH);
            $( value ).css({
                'position': 'absolute',
                'top': minH + 'px',
                'left': $aPin[minHIndex].offsetLeft + 'px'
            });
            //数组 最小高元素的高 + 添加上的aPin[i]块框高
            pinHArr[ minHIndex ] += $aPin[index].offsetHeight;//更新添加了块框后的列高
        }
    });
}

function checkScroll(){
    var $aPin = $( "li" );
    var lastPinH = $aPin.last().get(0).offsetTop + Math.floor($aPin.last().height()/2);//创建【触发添加块框函数waterfall()】的高度：最后一个块框的距离网页顶部+自身高的一半(实现未滚到底就开始加载)
    var scrollTop = $( window ).scrollTop(); //注意解决兼容性
    var documentH = $( document ).width();//页面高度
    return (lastPinH < scrollTop + documentH ) ? "true" : "false";//到达指定高度后 返回true，触发waterfall()函数
}
