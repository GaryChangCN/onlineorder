<?php
	header("content-type:text/html;charset=utf-8");
	include"conn.php";
	$a=$_POST['x_eng_name'];
	mysql_select_db("login",$link);
	$query=mysql_query("select g_eng_name from $a",$link);
	while($gid=mysql_fetch_array($query)){
		$g_eng_name[]=$gid['g_eng_name'];
	};
    $c=implode("#", $g_eng_name);
	echo $c;
?>
	