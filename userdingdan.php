<?php
header("content-type:text/html;charset=utf-8");
$a=$_POST['goods'];
$b=$_POST['names'];
include"conn.php";
$arr1 = explode("-", $a);
$arr2 = array();                
foreach($arr1 as $key=>$data) {              //分割为一个二维数组
      array_push($arr2, explode('x+', $data));
}
$time1=date('m-d h:i:s',time());
array_pop($arr2);//arr2即为传来商品的商品二维数组
$jige= sizeof($arr2, 0);  //购买了几种类型的商品
mysql_select_db("user",$link);
$x;
for($x=0;$x<$jige;$x++){
	$shangpin=$arr2[$x][0];
	$shuliang=$arr2[$x][1];
		if(!mysql_query("insert into $b values('','$shangpin','$shuliang','11','$time1','0')"))
		die(mysql_error());
}
