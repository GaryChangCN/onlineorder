<?php
	header("content-type:text/html;charset=utf-8");
	include"conn.php";
	$a=$_POST['x_pic_name'];
	mysql_select_db("login",$link);
	$query=mysql_query("select g_pic_name from $a",$link);
	while($gpicname=mysql_fetch_array($query)){
		$g_pic_name[]=$gpicname['g_pic_name'];
	};
	$c=implode("#", $g_pic_name);   //把数组转换为字符串 并用#号隔开
	echo $c;
?>