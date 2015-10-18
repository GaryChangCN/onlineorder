<?php
header("Content-type: text/html; charset=utf-8");
include "../conn.php";
$addfenzu=$_POST['addfenzu'];
mysql_select_db("login", $link);
if (!mysql_query("insert into fenzu values('','$addfenzu')"))
		die(mysql_error());
	echo "提交成功";
	?>
