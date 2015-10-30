<?php
header("content-type:text/html;charset=utf-8");
include "../conn.php";
$coo = $_COOKIE['password'];
//读取cookies
session_id($coo);
session_start();
$sess = $_SESSION['password'];
if ($sess == 'admin888') {
	$name0 = $_POST['name0'];
	$eng_name = $_POST['eng_name'];
	$price = $_POST['price'];
	$jianjie = $_POST['jianjie'];
	$fenzu = $_POST['fenzu'];
	if ((($_FILES['file']['type'] == "image/gif") || ($_FILES['file']['type'] == "image/jpeg") || ($_FILES['file']['type'] == "image/png") || ($_FILES['file']['type'] == "image/jpg")) && ($_FILES['file']['size'] < 2000000)) {
		if ($_FILES['file']['error'] > 0) {
			echo "出现错误" . $_FILES['file']['error'] . "<br/>";
		} else {
			$name1 = iconv("UTF-8", "GBK", $_FILES['file']['name']);
			$name2 = $_FILES['file']['name'];
			if (file_exists("../img/" . $_FILES['file']['name'])) {
				//====
				move_uploaded_file($_FILES['file']["tmp_name"], "../img/" . $name1);
				mysql_select_db("login", $link);
				mysql_query("insert into $fenzu values('','$name0','$price','$eng_name','$name2','$jianjie')");
				echo "上传成功" . "<a href='frame.html'>返回</a>";
				//====
				echo $name1 . "图片已存在,无需上传";
			} else {
				move_uploaded_file($_FILES['file']["tmp_name"], "../img/" . $name1);
				mysql_select_db("login", $link);
//				$coo = $_COOKIE['id'];
//				session_id($coo);
//				session_start();
//				$sess = $_SESSION['password'];
				mysql_query("insert into $fenzu values('','$name0','$price','$eng_name','$name2','$jianjie')");
				echo "上传成功" . "<a href='frame.html'>返回</a>";
			}
		}
	} else {
		echo "您的上传信息没有填写完整或者图片格式不对或者过大（图片仅限gif/jpg/jpeg/png格式且图片不超过3M）" . "<a href='frame.html'>返回</a>";
	}
}else{
	echo "你还没有登陆";
}

?>
