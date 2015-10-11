<?php
	header("content-type:text/html;charset=utf-8");
	include"conn.php";
	mysql_select_db("login",$link);
	$query=mysql_query("select g_name from goods_niupai",$link);
	while($gid=mysql_fetch_array($query)){
		$g_name[]=$gid['g_name'];
	};
	$c=implode("#", $g_name);   //把数组转换为字符串 并用#号隔开
	echo $c;
?>
