// JavaScript Document
var xmlHttp = createXmlHttpRequestObject();
window.onload=function(){
    var titel=document.getElementById('kop');
    titel.className = 'tekst';
	
    var vakje=document.getElementById('vak');
    vakje.className = 'vak';
	
    var boks=document.getElementById('box');
    boks.className = 'box';
}
/*Functie welke de knopafhandeling uitvoerd.
koppelen aan functie die de tekst ophaalt: getTekst
*/
function buttonOnclickHandler(sendHash){
    getTekst(sendHash);
}
/*Functie welke de tekst van het tekstveld ophaald 
*/
function getTekst(sendHash){
	
    process(sendHash);
	
}
/*Functie welke door getTekst wordt aangeroepen en de info naar het DOM element box 
stuurt.*/
function setTekst(waarde){
    document.getElementById('tekstgebied').value += waarde;
}

// Het maken van een XMLHttpRequest instance
function createXmlHttpRequestObject() 
{
    //De reference naar het XMLHttpRequest object
    var xmlHttp;
    // Alle browsers exclusief IE6 en ouder
    try
    {
        // Aanmaken van XMLHttpRequest object
        xmlHttp = new XMLHttpRequest();
    }
    catch(e)
    {
        // IE6 of ouder
        var XmlHttpVersions = new Array("MSXML2.XMLHTTP.6.0",
            "MSXML2.XMLHTTP.5.0",
            "MSXML2.XMLHTTP.4.0",
            "MSXML2.XMLHTTP.3.0",
            "MSXML2.XMLHTTP",
            "Microsoft.XMLHTTP");
        // Allemaal proberen tot er een werkt
 
        for (var i=0; i<XmlHttpVersions.length && !xmlHttp; i++) 
        {
            try 
            { 
                // probeer een XMLHttpRequest object te maken
                xmlHttp = new ActiveXObject(XmlHttpVersions[i]);
            } 
            catch (e) {}
        }
    }
    // return het gecreeerde object of geef een foutmelding
    if (!xmlHttp)
        alert("Error creating the XMLHttpRequest object.");
    else 
        return xmlHttp;
}

// Lees een file van de server
function process(sendHash)
{
    // Alleen doorgaan als er een xmlHttp object wordt teruggegeven
    if (xmlHttp)
    {
        // probeer een verbinding met de server te maken
        try
        {
            // initieer het lezen van een bestand van de server
            var waarde = document.getElementById('invoer').value;
            sendData = "control.php?mdata=" + waarde;
            if (sendHash){
                var hash = MD5(document.getElementById('invoer').value);
                sendData += "&hash=" + hash;
            }
            
	 
            xmlHttp.open("GET", sendData, true);
            xmlHttp.onreadystatechange = handleRequestStateChange;
 	
            xmlHttp.send(null);
        }
        // in geval van falen, fout weergeven
        catch (e)
        {
            alert("Can't connect to server:\n" + e.toString());
        }
    }
}


// functie welke wordt aangeroepen indien de state van het HTTP request veranderd
function handleRequestStateChange() 
{
	
    // wanneer readyState 4 is , zijn we klaar om de server response te lezen
    if (xmlHttp.readyState == 4) 
    {
        // Alleen doorgaan als de HTTP status "OK" is
        if (xmlHttp.status == 200) 
        {
            try
            {
                // Handel de respons van de server af
                handleServerResponse();
            }
            catch(e)
            {
                // Geef indien nodig een foutmelding
                alert("Error reading the response: " + e.toString());
            }
        } 
        else
        {
            //Geef een status bericht door
            alert("There was a problem retrieving the data:\n" + 
                xmlHttp.statusText);
 
        }
    }
}

// handelt de respons van de server af
function handleServerResponse()
{
	
    // Lees de boodschap van de server
    var xmlResponse = xmlHttp.responseXML;
    // Het opvangen van mogelijke IE en opera fouten
    if (!xmlResponse || !xmlResponse.documentElement)
        throw("Invalid XML structure:\n" + xmlHttp.responseText);
    // Het opvangen van mogelijke Firefox fouten
    var rootNodeName = xmlResponse.documentElement.nodeName;
    if (rootNodeName == "parsererror") throw("Invalid XML structure");
    // Het XML's document element verkrijgen
    xmlRoot = xmlResponse.documentElement; 
    // Arrays met data ophalen
    titleArray = xmlRoot.getElementsByTagName("title");
    datumArray = xmlRoot.getElementsByTagName("datum");
    // HTML output genereren
    var html = ""; 
    // Door de arrays heen lopen en de HTML structuur bouwen
    for (var i=0; i<titleArray.length; i++)
        html += titleArray.item(i).firstChild.data + 
        ", " + datumArray.item(i).firstChild.data + '\r\n';
 
    setTekst(html);
 
}