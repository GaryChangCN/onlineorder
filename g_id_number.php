<?php
	header("content-type:text/html;charset=utf-8");
	include"conn.php";
	$a=$_POST['x_id'];
	mysql_select_db("login",$link);
	$query=mysql_query("select g_id from $a",$link);
	while($gid=mysql_fetch_array($query)){
		$g_id[]=$gid['g_id'];
	};
echo count($g_id);
?>
