<?php
header('content-type:textml;charset=utf-8');
require "conn.php"; 

if (isset($_POST['username'])&& isset($_POST['password'])) {
    $username = $_POST['username'];
    $password =sha1($_POST['password']);
    $result = $conn->query("select * from zhuce where username='$username' and password='$password'");
    if ($result->fetch_assoc()) {
        echo 'true';
    } else {
        echo 'false';
    };
} else {
    exit('非法操作'); //退出并打印出内部的信息
};

?>


<!-- if(isset($_POST["email"])){
    $email=$_POST['email'];
    $pwd=sha1($_POST['pwd']);
    $sele="select * from uname where email='$email' and password='$pwd'";
    $rel=$conn->query($sele);
    echo json_encode ($rel->fetch_assoc());
}
if(isset($_POST["name"])){
    $name=$_POST['name'];
    $pwd=sha1($_POST['pwd']);
    $sele="select * from uname where name='$name' and password='$pwd'";
    $rel=$conn->query($sele);
    echo json_encode ($rel->fetch_assoc());
} -->
