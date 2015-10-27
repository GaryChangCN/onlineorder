<?php
    header("content-type:text/html;charset=utf-8");
	include"../conn.php";
	$time1=$_POST['data1'];
	$data2=$_POST['data2'];
	mysql_select_db("login",$link);
	//$time1=date("m-d",time());
	$q=mysql_query("select s_goods from $data2 where s_time='$time1'",$link);
	while($a=mysql_fetch_array($q)){
		$aa[]=$a['s_goods'];
	}
	$c=implode("#", $aa);
	echo $c;
	?>