<?php
$hostname = 'localhost';
$user = 'tinytin';
$password = 'tinytin';
//连接数据库
$link = mysql_connect($hostname, $user, $password);
if (!$link) {
	die('err' . mysql_error());
}
?>
