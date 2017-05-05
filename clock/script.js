/**
 * Created by pjj on 2017/5/4.
 */
var WINDOW_WIDTH = document.body.clientWidth;             //页面可视区宽度
var WINDOW_HEIGHT = document.body.clientHeight;           //页面可视区高度
var MARGIN_TOP = Math.round(WINDOW_HEIGHT /8);            //距离顶部距离
var MARGIN_LEFT = Math.round(WINDOW_WIDTH /12);           //距离左边距离
var RADIUS = Math.round(WINDOW_WIDTH * 4 / 5 / 108)-1;    //圆心半径

window.onload = function(){
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext("2d");
    canvas.width = WINDOW_WIDTH;
    canvas.height = WINDOW_HEIGHT;

    setInterval( function(){render(context);}, 50);
};

function render(cxt){
    var curTime = new Date();
    cxt.clearRect(0,0,WINDOW_WIDTH, WINDOW_HEIGHT);

    var hours = checkTime(curTime.getHours());         //返回小时（0-23）
    var minutes= checkTime(curTime.getMinutes());      //返回分钟
    var seconds= checkTime(curTime.getSeconds());      //返回秒数

    renderDigit( MARGIN_LEFT , MARGIN_TOP , parseInt(hours/10) , cxt );
    renderDigit( MARGIN_LEFT + 15*(RADIUS+1) , MARGIN_TOP , parseInt(hours%10) , cxt );
    renderDigit( MARGIN_LEFT + 30*(RADIUS + 1) , MARGIN_TOP , 10 , cxt );
    renderDigit( MARGIN_LEFT + 39*(RADIUS+1) , MARGIN_TOP , parseInt(minutes/10) , cxt);
    renderDigit( MARGIN_LEFT + 54*(RADIUS+1) , MARGIN_TOP , parseInt(minutes%10) , cxt);
    renderDigit( MARGIN_LEFT + 69*(RADIUS+1) , MARGIN_TOP , 10 , cxt);
    renderDigit( MARGIN_LEFT + 78*(RADIUS+1) , MARGIN_TOP , parseInt(seconds/10) , cxt);
    renderDigit( MARGIN_LEFT + 93*(RADIUS+1) , MARGIN_TOP , parseInt(seconds%10) , cxt);


}
//补0处理
function checkTime(i){
    if( i < 10 )  i='0'+ i;
    return i;
}

function renderDigit(x, y, num, cxt){
    cxt.fillStyle = "rgb(37,70,101)";

    for(var i=0; i < digit[num].length; i++){
        for(var j=0; j < digit[num][i].length; j++){
            if( digit[num][i][j] == 1){
                cxt.beginPath();
                cxt.arc( x+j*2*(RADIUS+1)+(RADIUS+1) , y+i*2*(RADIUS+1)+(RADIUS+1) , RADIUS , 0 , 2*Math.PI );
                cxt.fill();
            }
        }
    }
}