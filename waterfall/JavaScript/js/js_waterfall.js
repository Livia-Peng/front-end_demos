/**
 * Created by pjj on 2017/3/22.
 */
window.onload = function(){

    waterfall();

    window.onscroll = function(){
        if(checkScroll()){
            var oParents = document.getElementById('main');
            var oBox = document.createElement('li');
            oBox.className = 'box';
            oParents.appendChild(oBox);

            var oPic = document.createElement('div');
            oPic.className = 'pics';
            oBox.appendChild(oPic);

            var oImg = document.createElement('img');
            oImg.src = './images/' + Math.round( Math.random()*20 ) + '.jpg';
            oPic.appendChild(oImg);

            waterfall();
        }
    }
};

function waterfall(){
    var aPics = document.getElementsByTagName('li');
    var boxHArr = [];                                 //数组，用于存储第一行图片盒子的高度
    for(var i = 0; i < aPics.length; i++){
        var boxH = aPics[i].offsetHeight;
        if(i < 5){
            boxHArr[i] = boxH;
        }else{
            var minH = Math.min.apply(null,boxHArr);  //第一行高度中的最小值
            var minIndex = boxHArr.indexOf(minH);
            aPics[i].style.position = 'absolute';
            aPics[i].style.top =  minH+'px';
            aPics[i].style.left = aPics[minIndex].offsetLeft +'px';
            boxHArr[minIndex] += aPics[i].offsetHeight;
        }
    }
}

function checkScroll(){
    var oParents = document.getElementById('main');
    var aPics = document.getElementsByTagName('li');
    var lastPicH=aPics[aPics.length-1].offsetTop+Math.floor(aPics[aPics.length-1].offsetHeight/2);
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    var windowH = document.documentElement.clientTop;
    return (lastPicH < (scrollTop + windowH)) ? 'true':'false';
}

