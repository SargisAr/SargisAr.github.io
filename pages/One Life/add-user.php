<?php
$mysql = new mysqli("localhost", "id15762398_sargisartashyan", "dJw_PM1YWDRQZD", "id15762398_users");
$mysql->query("SET NAMES 'utf8'");

if ($mysql->connect_error) {
    echo 'Error Number: ' . $mysql->connect_errno . '<br>';
    echo 'Error: ' . $mysql->connect_error;
    exit;
}


$login = $_POST['userLogin'];
$mail = $_POST['userMail'];
$pass = $_POST['userPass'];

$mysql->query("INSERT INTO `users_accaunt` (`login`, `email` , `password`) VALUES('$login', '$mail', '$pass')");

$mysql->close();
header('Location: ./index.html');