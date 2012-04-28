// Het opslaan van het XMLHttpRequest object
var xmlHttp = maakXmlHttpRequestObject();

// verkrijgen van het XMLHttpRequest object
function maakXmlHttpRequestObject(){

    var xmlHttp;
    // Wanneer men gebruikmaakt van Microsoft Internet Explorer
    if(window.ActiveXObject){
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    // Alle andere browsers
    else{
        try{
            xmlHttp = new XMLHttpRequest();
        }
        catch (e){
            xmlHttp = false;
        }
    }
    // return the created object or display an error message
    if (!xmlHttp){
        alert("Probleem met het maken van het XMLHttpRequest object.");
    }
    else{
        return xmlHttp;
    }
}

// aanmaken van een asynchronous HTTP request
function verwerken(){
    // alleen doorgaan wanneer het xmlHttp object beschikbaar is
    if (xmlHttp.readyState == 4 || xmlHttp.readyState == 0){
        // ophalen van de getypte naam
        naam = encodeURIComponent(document.getElementById("Naam").value);
        // uitvoeren van de model.php pagina op de server
        xmlHttp.open("GET", "model.php?naam=" + naam, true);

        xmlHttp.onreadystatechange = verwerkServerRespons;

        xmlHttp.send(null);
    }
    else{
        // als de verbinding bezet is, probeer het opnieuw na 1 seconde
        setTimeout("verwerken()", 100000);
    }

    // wordt automatisch verwerkt, wanneer een boodschap van de server wordt ontvangen
    function verwerkServerRespons(){
        //Alleen verder gaan als de transactie geslaagd is
        if (xmlHttp.readyState == 4){
            // status van 200 geeft aan dat de transactie succesvol is afgerond
            if (xmlHttp.status == 200){

                xmlResponse = xmlHttp.responseXML;

                xmlDocumentElement = xmlResponse.documentElement;


                mededeling = xmlDocumentElement.firstChild.data;

                document.getElementById("boodschap").innerHTML =
                    "<i>" + mededeling + "</i>";
                // Opnieuw starten
                setTimeout("verwerken()", 10000);
            }
            else{
                alert("Er was een probleem met het benaderen van de server: " + xmlHttp.statusText);
            }
        }
    }
}