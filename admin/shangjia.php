<?php
header("Content-type: text/html; charset=utf-8");
include "../conn.php";
$fenzu=$_POST['fenzu'];     
//选择商品分组 
$cn_name=$_POST['cn_name'];
$eng_name=$_POST['eng_name'];
$xiangqing=$_POST['xiangqing'];
$pic_name=$_POST['pic_name'];
$jiage=$_POST['jiage'];
mysql_select_db("login", $link);
if (!mysql_query("insert into $fenzu values('','$cn_name','$jiage','$eng_name','$pic_name','$xiangqing')"))
		die(mysql_error());
	echo "提交成功";
