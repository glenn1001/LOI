var xmlhttp;
function loadAccount() {
    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            document.getElementById("login").innerHTML=xmlhttp.responseText;
        }
    }
    
    xmlhttp.open("GET","controller/account.php",true);
    xmlhttp.send();
}

function login() {
    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            document.getElementById("login").innerHTML=xmlhttp.responseText;
            loadBlog();
        }
    }
    xmlhttp.open("GET","controller/account.php?" + 'user=' + document.getElementById("user").value + '&pass=' + document.getElementById("pass").value,true);
    xmlhttp.send();
}

function logout() {
    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            document.getElementById("login").innerHTML=xmlhttp.responseText;
            loadBlog();
        }
    }
    xmlhttp.open("GET","controller/account.php?mode=logout",true);
    xmlhttp.send();
}

function loginByEnter(e){
    if (e.keyCode == 13) {
        login();
    }
}