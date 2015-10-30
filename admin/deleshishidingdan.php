<?php
header("content-type:text/html;charset=utf-8");
include"../conn.php";
$coo = $_COOKIE['password'];
session_id($coo);
session_start();
$sess = $_SESSION['password'];
if($sess=='admin888'){
	$s_id=$_POST['s_id'];
	$_name=$_POST['s_name'];
	mysql_select_db("login",$link);
	if(!mysql_query("DELETE FROM shishidingdan WHERE s_id='$s_id'"))
	die(mysql_error());
	echo "已完成订单"."-".$s_id;
//	mysql_select_db("user",$link){
//	mysql_query("UPDATE ")  完成订单  设置完成
//	}
}else{
	echo "请先登录";
}
?>