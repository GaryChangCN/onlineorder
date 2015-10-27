<?php
	header("content-type:text/html;charset=utf-8");
	$id=$_POST['id'];
	$password=$_POST['password'];
	if($id=="admin"&&$password=="admin888"){
		session_start();
		session_id($password);
		$_SESSION['password']="admin888";
		setcookie("password",$password);
		setcookie("id",$id);
		echo "登陆成功"."<script language='javascript' type='text/javascript'>window.location.href='index.html'</script>";
	}else{
		echo "抱歉不能让您登陆";
	}
	?>