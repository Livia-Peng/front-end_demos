<?php
    session_start();

    $image = imagecreatetruecolor( 200, 60 );  //生成底图，默认黑色
    $bgcolor = imagecolorallocate( $image , 255 , 255 , 255 );
    imagefill( $image , 0 , 0 , $bgcolor );   //生成白色底图

    //增加干扰元素点、线
    for( $i=0 ; $i<200; $i++ ){
        $pointcolor = imagecolorallocate( $image ,rand(50,200),rand(50,200),rand(50,200));
        imagesetpixel($image,rand(1,199),rand(1,59),$pointcolor);
    }
    for( $i=0 ; $i<5; $i++ ){
        $linecolor = imagecolorallocate( $image ,rand(80,220),rand(80,220),rand(80,220));
        imageline($image,rand(1,199),rand(1,59),rand(1,199),rand(1,59),$linecolor);
    }

    $captch_code = '';
    //生成验证内容：数字+字母
    for( $i=0 ; $i<4 ; $i++ ){
        $fontsize = 24;
        $fontcolor = imagecolorallocate( $image ,rand(0,120),rand(0,120),rand(0,120) );
        $data = 'abcdefghijkmnpqrstuvwxy3456789';  //去掉容易混淆的数字和字母
        $fontcontent = substr( $data ,rand(0,strlen($data)),1 );
        $captch_code.= $fontcontent;
        $x = ($i*200/4) + rand(10,30);
        $y = rand(20,40);
        imagestring( $image , $fontsize , $x , $y , $fontcontent , $fontcolor );
    }
    $_SESSION['authcode'] = $captch_code;

    header( 'content-type:image/png');  //提前输出图片信息
    imagepng( $image );      //输出$image
    imagedestroy( $image );  //销毁$image