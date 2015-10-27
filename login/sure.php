<?php
header("Content-type: text/html; charset=utf-8");
include "conn.php";
$userName = $_POST['userName'];
$userPassword = $_POST['userPassword'];
mysql_select_db("login", $link);
$q = mysql_query("select name from user", $link);
//选择user表中name列
while ($dbUserName = mysql_fetch_array($q)) {//$adUserName是数据库已经注册的用户名
	$dbUserNames[] = $dbUserName['name'];
}
//选择user表中password列
$qq = mysql_query("select password from user", $link);
mysql_close($link);
while ($dbUserPassword = mysql_fetch_array($qq)) {
	$dbUserPasswords[] = $dbUserPassword['password'];
}
//print_r($dbUserPasswords);//==============================
function arrayChange($a) {//二维数组转为一位数组函数
	static $arr2;
	foreach ($a as $v) {
		if (is_array($v)) {
			arrayChange($v);
		} else {
			$arr2[] = $v;
		}
	}
	return $arr2;
}

$dbUserName2 = arrayChange($dbUserNames);
//$dbUserName2  已经注册过的用户名  一位数组
//print_r($dbUserName2);
//	$dbUserPassword2=arrayChange($dbUserPasswords);//同上 不过是pssword
//print_r($dbUserPassword2);//=======================
if (array_search($userName, $dbUserName2)>=0) {
	if (in_array($userPassword, $dbUserPasswords)) {   
		echo "success";      //登陆成功
		setcookie('userName',$userName);                        //  登陆成功设置cookie！
		setcookie('userPassword',$userPassword);
	} else {
		echo "passwordfail";  //密码错误
	}
} else {
	echo "nouser";    //没有该用户
}
