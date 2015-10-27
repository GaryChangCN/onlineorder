<meta charset="UTF-8"/>
<?php

$link = mysql_connect("localhost","tinytin","tinytin"); 
if (!$link){ 
die("连接数据库失败：" . mysql_error()); 
} 
//echo "ok";
?>