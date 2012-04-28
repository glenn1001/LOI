<?php

$dbConnection = @mysql_connect($dbHost, $dbUser, $dbPass);
if ($dbConnection) {
    mysql_select_db($dbName, $dbConnection);
}

function sqlQuote($value) {
    if (get_magic_quotes_gpc()) {
        $value = stripslashes($value);
    }
    //check if this function exists
    if (function_exists("mysql_real_escape_string")) {
        $value = mysql_real_escape_string($value);
    }
    //for PHP version < 4.3.0 use addslashes
    else {
        $value = addslashes($value);
    }
    return $value;
}

?>