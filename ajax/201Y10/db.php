<?php

function getResult($inhoud) {
    $host = 'localhost';
    $user = 'ajax';
    $pass = 'loi';
    $name = 'ajax';

    $connection = @mysql_connect($host, $user, $pass);
    if ($connection) {
        mysql_select_db($name, $connection);

        $query = "SELECT inhoud FROM `zoekmachine` WHERE `woord`='$inhoud'";
        $result = mysql_query($query);
        if (mysql_num_rows($result) > 0) {
            while ($row = mysql_fetch_array($result)) {
                $resultaat = $row['inhoud'];
            }
        } else {
            $resultaat = "Uw zoek opdracht heeft geen treffers opgeleverd";
        }
    } else {
        $resultaat = "Couldn't make a connection to the database: " . mysql_error();
    }

    return $resultaat;
}

?>