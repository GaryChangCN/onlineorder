<?php
header("Content-type: text/html; charset=utf-8");
include"../conn.php";
$fenzu=$_POST['fenzu'];
$coo = $_COOKIE['password'];
session_id($coo);
session_start();
$sess = $_SESSION['password'];
if($sess=='admin888'){
	$fenzu=$_POST['fenzu'];
	$name=$_POST['name'];
//	$file="../img/".$name;
//	unlink($file);
	mysql_select_db("login",$link);
	if(!mysql_query("DELETE FROM $fenzu WHERE g_name='$name'"))
	die(mysql_error());
	echo "已删除".$fenzu."中的".$name."商品";
}
else{
	echo "请先登录";
}
?>