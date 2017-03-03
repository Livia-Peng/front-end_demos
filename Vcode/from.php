<?php
    if( isset( $_REQUEST['authcode'])){
        session_start();
        if(strtolower($_REQUEST['authcode']) == $_SESSION['authcode']){
            echo 'right';
        }else{
            echo 'wrong';
        }
        exit();
    }
?>