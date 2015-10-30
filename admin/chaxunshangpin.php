<?php
header("Content-type: text/html; charset=utf-8");
include"../conn.php";
$fenzu=$_POST['fenzu'];
$coo = $_COOKIE['password'];
session_id($coo);
session_start();
$sess = $_SESSION['password'];
if($sess=='admin888'){
	$fenzu=$_POST['selectfenzu'];
	mysql_select_db("login",$link);
	$q=mysql_query("select ")
}else{
	echo "你还没有登录";
}
?>