<?php

function checkLogin($user, $pass, $login = true) {
    $query = "SELECT * FROM user WHERE user='$user' AND pass='$pass'";
    $result = mysql_query($query);
    if (mysql_num_rows($result) > 0) {
        if ($login) {
            while ($row = mysql_fetch_array($result)) {
                $type = $row['type'];
            }

            $sessions[] = array('key' => 'user', 'value' => $user);
            $sessions[] = array('key' => 'pass', 'value' => $pass);
            $sessions[] = array('key' => 'type', 'value' => $type);
            setSessions($sessions);
        }

        return false;
    } else {
        if (!$login) {
            unsetSessions(array('user', 'pass', 'type'));
        }
        return 'U heeft een incorrecte gebruikersnaam en/of wachtwoord ingevuld.';
    }
}

?>