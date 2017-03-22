/**
 * Created by pjj on 2017/3/22.
 */

$(function () {
    var container = $('#box');
    var list = $('#pics');
    var buttons = $('#dots span');
    var prev = $('#pre');
    var next = $('#next');
    var index = 1;
    var len = 7;
    var interval = 3000;
    var timer;


    function animate (offset) {
        var left = parseInt(list.css('left')) + offset;
        if (offset>0) {
            offset = '+=' + offset;
        }
        else {
            offset = '-=' + Math.abs(offset);
        }
        list.animate({'left': offset}, 300, function () {
            if(left > -200){
                list.css('left', -600 * len);
            }
            if(left < (-600 * len)) {
                list.css('left', -600);
            }
        });
    }

    function showButton() {
        buttons.eq(index-1).addClass('on').siblings().removeClass('on');
    }

    function play() {
        timer = setTimeout(function () {
            next.trigger('click');
            play();
        }, interval);
    }
    function stop() {
        clearTimeout(timer);
    }

    next.bind('click', function () {
        if (list.is(':animated')) {
            return;
        }
        if (index == 7) {
            index = 1;
        }
        else {
            index += 1;
        }
        animate(-600);
        showButton();
    });

    prev.bind('click', function () {
        if (list.is(':animated')) {
            return;
        }
        if (index == 1) {
            index = 7;
        }
        else {
            index -= 1;
        }
        animate(600);
        showButton();
    });

    buttons.each(function () {
        $(this).bind('click', function () {
            if (list.is(':animated') || $(this).attr('class')=='on') {
                return;
            }
            var myIndex = parseInt($(this).attr('index'));
            var offset = -600 * (myIndex - index);

            animate(offset);
            index = myIndex;
            showButton();
        })
    });

    container.hover(stop, play);

    play();

});