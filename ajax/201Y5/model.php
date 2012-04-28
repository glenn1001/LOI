<?php
// XML output
header("Content-Type: text/xml");
// XML header maken
echo '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>';
// aanmaken <response> element
echo "<response>";
// naam ophalen
$naam = $_GET["naam"];

$belangrijkeMensen = array('GLENN', 'ARJAN', 'ARJEN');
if (in_array(strtoupper($naam), $belangrijkeMensen)){
    echo "Hallo vriend, " . htmlentities($naam) . "!";
}
else if (trim($naam) == ""){
    echo "Vreemdeling, wat is je naam?";
}
else{
    echo htmlentities($naam) . ", Ik ken je niet!";
}
// sluiten respons element. 
echo "</response>";
?>