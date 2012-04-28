window.onload=function(){
    var hello=document.getElementById('hello');
    hello.className='declared';

    var empty=document.getElementById('empty');
    addNode(empty,"Ik ben een AJAX cursist");
    addNode(empty,"Er zijn nu meerdere");
    addNode(empty,"nodes toegevoegd");
    addNode(empty,"Het werkt ook nog!");

    var children=empty.childNodes;
    for (var i = 0; i < children.length; i++){
        children[i].className='programmed';
    }

    empty.style.border='solid red 4px';
    empty.style.width="350px";
}

function addNode(el,text){
    var childEl=document.createElement("div");
    el.appendChild(childEl);
    var txtNode=document.createTextNode(text);
    childEl.appendChild(txtNode);
}