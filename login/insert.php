<?php
header("Content-type: text/html; charset=utf-8");
include "conn.php";
$userName = $_POST['userName'];
$UserPassword = $_POST['userPassword'];
mysql_select_db("login", $link);
$q = mysql_query("select id from user", $link);
$qq = mysql_query("select name from user", $link);
mysql_set_charset('utf8');
//选择user表中name列
while ($dbUserName = mysql_fetch_array($qq)) {//$adUserName是数据库已经注册的用户名
	$dbUserNames[] = $dbUserName['name'];
}
//function arrayChange($a) {//二维数组转为一位数组函数
//	static $arr2;
//	foreach ($a as $v) {
//		if (is_array($v)) {
//			arrayChange($v);
//		} else {
//			$arr2[] = $v;
//		}
//	}
//	return $arr2;
//}

//$dbUserName2 = arrayChange($dbUserNames);
////print_r($dbUserName2);
//while ($dbId = mysql_fetch_array($q)) {//选取user表ID列 并且变为dbids数组
//	$dbIds[] = $dbId['id'];
//}
//$a = count($dbIds);
//$userId = $dbIds[$a - 1] + 1;
//用户id比前一个大1
if (in_array($userName, $dbUserName2)) {
	echo "fail";
} else {
	if (!mysql_query("insert into user values('','$userName','$UserPassword','0')"))
		die(mysql_error());
	echo "success";
}
?>
