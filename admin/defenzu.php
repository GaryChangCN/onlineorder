<?php
header("Content-type: text/html; charset=utf-8");
include"../conn.php";
$fenzu=$_POST['fenzu'];
$coo = $_COOKIE['password'];
session_id($coo);
session_start();
$sess = $_SESSION['password'];
if($sess=='admin888'){
	mysql_select_db("login",$link);
	if(!mysql_query("DELETE FROM fenzu WHERE z_name='$fenzu'"))
	die(mysql_error());
	echo "success";
	if(!mysql_query("DROP TABLE $fenzu"))
	die(mysql_error());
	echo "删除成功";
}else{
	echo "请先登录";
}
    ?>