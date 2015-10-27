<?php
	header("content-type:text/html;charset=utf-8");
	include"conn.php";
	$a=$_POST['x_jianjie'];
	mysql_select_db("login",$link);
	$query=mysql_query("select g_jianjie from $a",$link);
	while($gid=mysql_fetch_array($query)){
		$g_jianjie[]=$gid['g_jianjie'];
	};
	$c=implode("#", $g_jianjie);   //把数组转换为字符串 并用#号隔开
	echo $c;
?>