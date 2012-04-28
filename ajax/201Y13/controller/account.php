<?php

require 'auth.php';
include '../model/account.php';

if ($_GET['mode'] == 'logout') {
    unsetSessions(array('user', 'pass', 'type'));
} elseif (isset($_GET['user'])) {
    $user = $_GET['user'];
    $pass = $_GET['pass'];

    $error = checkLogin($user, $pass);
    if ($error) {
        unset($user);
    } else {
        $user = $_SESSION['user'];
    }
} elseif (isset($_SESSION['user'])) {
    $user = $_SESSION['user'];
    $pass = $_SESSION['pass'];

    $error = checkLogin($user, $pass, false);
    if ($error) {
        unset($user);
    }
}

include '../view/account.tpl';
?>