/**
 * Created by pjj on 2016/5/4.
     */
    $(document).ready(function(){
        $(".clk1").click(function(){
            $(this).siblings(".clk1").css("background-color","#333333");
            $(this).css("background-color","#000000");
        });
    });

    $(document).ready(function(){
        $(".clk2").click(function(){
            $(".box1").fadeIn("fast");
        });
    });

    $(document).ready(function(){
        $(".clk3").mouseover(function(){
            $(this).css("background-color","red");
        });
        $(".clk3").mouseout(function(){
            $(this).css("background-color","#e1e1e1");
        });
    });

    $(document).ready(function(){
        $(".clk3").click(function(){
            $(".box1").hide();
        });
    });

    $(document).ready(function(){
        $(".clk4_1").click(function(){
            $(this).css("background-color","#e1e1e1");
            $(".clk4_2").css("background-color","#ffffff");
        });
        $(".clk4_2").click(function(){
            $(this).css("background-color","#e1e1e1");
            $(".clk4_1").css("background-color","#ffffff");
        });
    });

    $(document).ready(function(){
        $(".clk4_1").click(function(){
            $(".fen4_left").fadeIn("fast");
            $(".fen4_right").fadeOut("fast");
        });
        $(".clk4_2").click(function(){
            $(".fen4_right").fadeIn("fast");
            $(".fen4_left").fadeOut("fast");
        });
    });

    $(document).ready(function(){
        $(".clk5").mouseover(function(){
            $(this).css("background-color","#e1e1e1");
        });
        $(".clk5").mouseout(function(){
            $(this).css("background-color","#FFFFFF");
        });
    });

    $(document).ready(function(){
        $(".clk6").mouseover(function(){
            $(this).css("background-color","red");
        });
        $(".clk6").mouseout(function(){
            $(this).css("background-color","#e1e1e1");
        });
    });

    $(document).ready(function(){
        $(".clk6").click(function(){
            $(".box2").hide();
        });
    });
    $(document).ready(function(){
        $(".clk7").click(function(){
            $(".box2").hide();
        });
    });

    $(document).ready(function(){
        $(".clk5").click(function(){
            $(".box2").fadeIn("fast");
        });
    });

    $(function(){
        var $element =$(".box2");
        var _move = false;
        var _x, _y;
        $element.mousedown(function (e) {
            _move = true;
            _x = e.pageX - parseInt($(this).css("left"));
            _y = e.pageY - parseInt($(this).css("top"));
        });
        $element.mousemove(function (e) {
            if (_move) {
                var x = e.pageX - _x;
                var y = e.pageY - _y;
                $(this).css({top: y, left: x});
            }
        }).mouseup(function() {
            _move = false;
        });
    })