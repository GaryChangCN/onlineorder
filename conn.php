<?php
$hostname = 'localhost';
$user = 'xxxxx';
$password = 'xxxx';
//连接数据库
$link = mysql_connect($hostname, $user, $password);
if (!$link) {
	die('err' . mysql_error());
}
?>
