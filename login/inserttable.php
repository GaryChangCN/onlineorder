<?php
header("Content-type: text/html; charset=utf-8");
include "conn.php";
mysql_set_charset('utf8');
mysql_select_db("user", $link);
$usernames= $_COOKIE['userName'];
$sql="CREATE TABLE $usernames (
	bianhao int(10) AUTO_INCREMENT PRIMARY KEY,
	good_name varchar(40),
	shuliang int(10),
	zhuohao int(10),
	DataTypes varchar(40),
	sure int(10)
	)";
	if(!mysql_query($sql,$link))
	die(mysql_error());
	

	?>