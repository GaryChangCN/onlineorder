<?php
	header("Content-type: text/html; charset=utf-8");
	if(isset($_COOKIE['userName'])){
		setcookie('userName',' ',time()-3600);
		setcookie('userPassword',' ',time()-3600);
	}
	echo "ok";
