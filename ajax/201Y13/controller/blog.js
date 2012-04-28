var xmlhttp;
var blogTitle = new Array();
var blogDescr = new Array();
var curPage;

function xmlhttpreq() {
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
    } else {// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
	
    return xmlhttp;
}

function loadBlog(page, footer) {
    curPage = page;
    if (footer == null) {
        footer = true;
    }
	
    xmlhttp=xmlhttpreq();
    
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            if (footer) {
                document.getElementById("blogcontainer").innerHTML=xmlhttp.responseText;
            } else {
                document.getElementById("blogs").innerHTML=xmlhttp.responseText;
            }
        }
    }
    
    xmlhttp.open("POST","controller/blog.php",true);
    xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    if (footer) {
        xmlhttp.send("page=" + page);
    } else {
        xmlhttp.send("page=" + page + "&footer=false");
    }
}

function addBlog() {
    xmlhttp=xmlhttpreq();
    
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            document.getElementById("blogcontainer").innerHTML=xmlhttp.responseText;
        }
    }
    
    xmlhttp.open("POST","controller/blog.php",true);
    xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xmlhttp.send("mode=add&title=" + document.getElementById('title').value + "&description=" + document.getElementById('description').value);
}

function anotherBlog() {
    xmlhttp=xmlhttpreq();
    
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            document.getElementById("addBlog").innerHTML=xmlhttp.responseText;
        }
    }
    
    xmlhttp.open("POST","controller/blog.php",true);
    xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xmlhttp.send("mode=another");
    
    return false;
}

function deleteBlog(id) {
    xmlhttp=xmlhttpreq();
    
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            document.getElementById("blogs").innerHTML=xmlhttp.responseText;
        }
    }
    
    xmlhttp.open("POST","controller/blog.php",true);
    xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xmlhttp.send("page=" + curPage + "&mode=delete&id=" + id);
}

function editBlog(id) {
    if (document.getElementById('blogDescrTxt' + id) == null) {
        blogTitle[id] = document.getElementById('blogTitle' + id).innerHTML;
        blogDescr[id] = document.getElementById('blogDescr' + id).innerHTML;
        document.getElementById('blogTitle' + id).innerHTML = '<input type="text" id="blogTitleInput' + id + '" value="' + document.getElementById('blogTitle' + id).innerHTML + '" />';
        document.getElementById('blogDescr' + id).innerHTML = '<textarea cols="80" rows="10" id="blogDescrTxt' + id + '">' + document.getElementById('blogDescr' + id).innerHTML + '</textarea><br /><button onclick="editBlogSubmit(' + id + ');">Verander</button><button onclick="editBlogUndo(' + id + ');">Annuleer verandering</button>';
    }
}

function editBlogUndo(id) {
    document.getElementById('blogTitle' + id).innerHTML = blogTitle[id];
    document.getElementById('blogDescr' + id).innerHTML = blogDescr[id];
}

function editBlogSubmit(id) {
    xmlhttp=xmlhttpreq();
    
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            document.getElementById("blogs").innerHTML=xmlhttp.responseText;
        }
    }
    
    xmlhttp.open("POST","controller/blog.php",true);
    xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xmlhttp.send("page=" + curPage + "&mode=edit&id=" + id + "&title=" + document.getElementById('blogTitleInput' + id).value + "&description=" + document.getElementById('blogDescrTxt' + id).value);
}