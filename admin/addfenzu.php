<?php
header("Content-type: text/html; charset=utf-8");
include "../conn.php";
$coo = $_COOKIE['password'];
session_id($coo);
session_start();
$sess = $_SESSION['password'];
if ($sess == 'admin888') {
	$addfenzu = $_POST['addfenzu'];
	if($addfenzu!=""){
	mysql_select_db("login", $link);
	if (!mysql_query("insert into fenzu values('','$addfenzu')"))
		die(mysql_error());
	echo "提交成功";
	$sql = "CREATE TABLE $addfenzu (
     g_id int(20) AUTO_INCREMENT PRIMARY KEY,
     g_name varchar(40),
     g_price varchar(40),
     g_eng_name varchar(40),
     g_pic_name varchar(40),
     g_jianjie text
     )";
	if (!mysql_query($sql, $link))
		die(mysql_error());
	}else{
		echo "请输入分组名";
	}
} else {
	echo "你还没有登陆";
}
?>