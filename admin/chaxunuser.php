<?php
    header("content-type:text/html;charset=utf-8");
	include"../conn.php";
	mysql_select_db("login",$link);
	$q=mysql_query("select name from user ",$link);
	while($a=mysql_fetch_array($q)){
		$aa[]=$a['name'];
	}
	$c=implode("#", $aa);
	echo $c;
	?>