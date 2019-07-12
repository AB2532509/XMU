<?php
require "conn.php";
//获取details.js中传递过来的itemid
if(isset($_GET['picid'])){
    $sid=$_GET['picid'];
    $result=$conn->query("select * from tupian where sid=$sid");
    echo json_encode($result->fetch_assoc());
}
