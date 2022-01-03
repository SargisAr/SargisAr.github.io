<?php
$mysql = new mysqli("localhost", "id15762398_sargisartashyan", "dJw_PM1YWDRQZD", "id15762398_users");
$mysql->query("SET NAMES 'utf8'");

if ($mysql->connect_error) {
    echo 'Error Number: ' . $mysql->connect_errno . '<br>';
    echo 'Error: ' . $mysql->connect_error;
    exit;
}


$login = $_POST['userLogin'];
$pass = $_POST['userPass'];
$user = $mysql->query("SELECT * FROM `users_accaunt` WHERE `login` = '$login' AND `password` = '$pass'");
$result = $user->fetch_all();
if (count($result) > 0) {
    header('Location: ./Peages/Profile/index.html');
} else {
    header('Location: ./index.html');
}

$mysql->close();