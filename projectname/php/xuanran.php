<?php

	require "conn.php";//引入数据库连接的文件
	
	
	//1.获取前端传来的做唯一匹配的值
	//判断是否传过来了
	//isset($_POST['submit']):为了提交表单数据到数据同时做检测.
	if (isset($_POST['username']) || isset($_POST['submit'])) {
		$username=$_POST['username'];
		$result = $conn->query("select * from zhuce where username='$username'");
		if ($result->fetch_assoc()) {
			echo 'true';
		} else {
			echo 'false';	
		};
	} else {
		exit('非法操作'); 
	};
	
	
	//2.如果单击注册按钮,按钮的值为注册,将表单的值添加的数据库.
	if(isset($_POST['submit'])){
		$user=$_POST['username'];//username：表单的名称
		$pass=md5($_POST['password']);
		$email=$_POST['email'];
		
		//添加语句
		$conn->query("INSERT INTO `zhuce` (`sid`, `username`, `password`, `email`) VALUES (NULL, '$user', '$pass', '$email')");
	// 	// $query=INSERT INTO `zhuce` (`sid`, `username`, `password`, `email`,) VALUES (NULL, '$user', '$pass', '$email');

	// mysql_query($query);


		// INSERT INTO `users` (`id`, `user_name`, `user_tel`, `user_pwd`) VALUES (NULL, '$user_name', '$user_tel', '$user_pwd')
		// $query="insert  zhuce (sid,username,password,email,regdate) values (null,'$user','$pass','$email',NOW())";
		// mysql_query($query);

		 echo '<script> location.href="http://127.1.1.0/PHP/projectname/src/login.html"</script>';
	}
