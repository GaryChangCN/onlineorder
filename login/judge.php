<?php
	header("Content-type: text/html; charset=utf-8");
	if(isset($_COOKIE['userName'])){
		if(isset($_COOKIE['userPassword'])){
			echo $_COOKIE['userName'];
		}
	}

