<?php
header("content-type:text/html;charset=utf-8");
include "../conn.php";
$fenzu = $_POST['select1'];
$name = $_POST['select2'];
$name2 = $_POST['name'];
$price = $_POST['price1'];
$eng_name = $_POST['eng_name1'];
$jianjie = $_POST['jianjie'];
$coo = $_COOKIE['password'];
//$pic = $_FILES['file']['name'];
//读取cookies
session_id($coo);
session_start();
$sess = $_SESSION['password'];
if ($sess == 'admin888') {
	mysql_select_db('login', $link);
	if ($price != "") {
		mysql_query("UPDATE $fenzu SET g_price='$price' WHERE g_name='$name'");
		echo "已经成功将原商品的价格修改为" . "->" . $price . "<a href='xiugaiframe.html'>返回</a>";
	} elseif ($eng_name != "") {
		mysql_query("UPDATE $fenzu SET g_eng_name='$eng_name' WHERE g_name='$name'");
		echo "已经成功将原商品的英文名修改为" . "->" . $eng_name . "<a href='xiugaiframe.html'>返回</a>";
	} elseif ($jianjie != "") {
		mysql_query("UPDATE $fenzu SET g_jianjie='$jianjie' WHERE g_name='$name'");
		echo "已经成功将原商品的简介修改为" . "->" . $jianjie . "<a href='xiugaiframe.html'>返回</a>";
	} elseif ($name2 != "") {
		mysql_query("UPDATE $fenzu SET g_name='$name2' WHERE g_name='$name'");
		echo "已经成功将原商品的名称修改为" . "->" . $name2 . "<a href='xiugaiframe.html'>返回</a>";
	} else {
		echo "你没有填写要修改的内容";
	}
} else {
	echo "请先登录";
}
?>