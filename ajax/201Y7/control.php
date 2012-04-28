<?PHP

header('Content-Type: text/xml');

$resultaat = "";
$inhoud = $_GET['mdata'];
$hash = $_GET['hash'];
date_default_timezone_set('UTC');

//Datum opvragen
$UTCdatum = date('l jS \of F Y h:i:s A');

//controleer of correcte hash is meegestuurd
if ($hash == md5($inhoud)){
    //SWITCH voor het opzoeken van de zoekwoorden.
    switch ($inhoud) {
        case "auteur":
            $resultaat = "Script is geschreven door Erik Mols, erik@erlen.nl";
            break;
        case "ajax":
            $resultaat = "is een programmeertaal";
            break;
        case "loi":
            $resultaat = "is het opleidingsinstituut, waar u deze opleiding volgt";
            break;
        default:
            $resultaat = "Uw zoek opdracht heeft geen treffers opgeleverd";
    }
} else {
    $resultaat = 'De meegestuurde hash was incorrect';
}

//Creeeren van een nieuw XML document
$dom = new DOMDocument();

// maak het root <response> element
$response = $dom->createElement('response');
$dom->appendChild($response);

// maak het <reacties> element en voeg het toe als een child van <response>
$reacties = $dom->createElement('reacties');
$response->appendChild($reacties);

// maak het title element voor de reactie
$title = $dom->createElement('title');
$tekst = $dom->createTextNode
        ($resultaat);
$title->appendChild($tekst);

// maak het datum element voor de reactie
$datum = $dom->createElement('datum');
$datumTekst = $dom->createTextNode($UTCdatum);
$datum->appendChild($datumTekst);


// maak het <reactie> element 
$reactie = $dom->createElement(reactie);
$reactie->appendChild($title);
$reactie->appendChild($datum);

// voeg <reactie> toe als een child van <reacties>
$reacties->appendChild($reactie);

// De XML structuur naar een string variabele omzetten
$xmlString = $dom->saveXML();
// Uitvoeren van de XML string
echo $xmlString;
?>
