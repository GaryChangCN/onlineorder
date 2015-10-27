<?php
    header("content-type:text/html;charset=utf-8");
	include"conn.php";
	mysql_select_db("login",$link);
	$q=mysql_query("select z_id from fenzu",$link);
	while($zid=mysql_fetch_array($q)){
		$z_id[]=$zid['z_id'];
	};
    echo count($z_id);
	?>