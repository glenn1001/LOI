<?php

ini_set("session.use_trans_sid", 0);
session_start();

require '../config.php';
require '../model/auth.php';

function setSessions($sessions) {
    foreach ($sessions as $session) {
        $key = $session['key'];
        $_SESSION["$key"] = $session['value'];
    }
}

function unsetSessions($sessions) {
    foreach ($sessions as $session) {
        unset($_SESSION["$session"]);
    }
}

?>