<?php
header("content-type:text/html;charset=utf-8");
include"../conn.php";
$a=$_POST['a'];
$b=$_POST['b'];
mysql_select_db("login",$link);
$q=mysql_query("select g_price,g_eng_name,g_jianjie from $a  WHERE g_name='$b' ",$link);
while($qq=mysql_fetch_array($q)){
	echo $qq['g_price']."#".$qq['g_eng_name']."#".$qq['g_jianjie'];
}
	?>