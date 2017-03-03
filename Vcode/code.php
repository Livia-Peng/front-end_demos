<?php
    session_start();

    $image = imagecreatetruecolor( 200, 60 );  //���ɵ�ͼ��Ĭ�Ϻ�ɫ
    $bgcolor = imagecolorallocate( $image , 255 , 255 , 255 );
    imagefill( $image , 0 , 0 , $bgcolor );   //���ɰ�ɫ��ͼ

    //���Ӹ���Ԫ�ص㡢��
    for( $i=0 ; $i<200; $i++ ){
        $pointcolor = imagecolorallocate( $image ,rand(50,200),rand(50,200),rand(50,200));
        imagesetpixel($image,rand(1,199),rand(1,59),$pointcolor);
    }
    for( $i=0 ; $i<5; $i++ ){
        $linecolor = imagecolorallocate( $image ,rand(80,220),rand(80,220),rand(80,220));
        imageline($image,rand(1,199),rand(1,59),rand(1,199),rand(1,59),$linecolor);
    }

    $captch_code = '';
    //������֤���ݣ�����+��ĸ
    for( $i=0 ; $i<4 ; $i++ ){
        $fontsize = 24;
        $fontcolor = imagecolorallocate( $image ,rand(0,120),rand(0,120),rand(0,120) );
        $data = 'abcdefghijkmnpqrstuvwxy3456789';  //ȥ�����׻��������ֺ���ĸ
        $fontcontent = substr( $data ,rand(0,strlen($data)),1 );
        $captch_code.= $fontcontent;
        $x = ($i*200/4) + rand(10,30);
        $y = rand(20,40);
        imagestring( $image , $fontsize , $x , $y , $fontcontent , $fontcolor );
    }
    $_SESSION['authcode'] = $captch_code;

    header( 'content-type:image/png');  //��ǰ���ͼƬ��Ϣ
    imagepng( $image );      //���$image
    imagedestroy( $image );  //����$image