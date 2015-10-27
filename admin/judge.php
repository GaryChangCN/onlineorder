<?php
header("content-type:text/html;charset=utf-8");
    if(isset($_COOKIE['id']))
	echo "欢迎您".$_COOKIE['id'];
	else{
		echo "erro";
	}
	?>