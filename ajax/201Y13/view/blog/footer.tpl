<div id="addBlog">
<br />
<hr />
<br />
<?php if ($mode == 'add') { ?>
    De nieuwe blog is succesvol toegevoegd.<br />
    Klik <a href='' onclick='return anotherBlog();'>hier</a> om nog een blog toe te voegen.
<?php } else { ?>
    Titel: <input type="text" id="title" /><br />
    Bericht:<br />
    <textarea cols="60" rows="10" id="description"></textarea><br />
    <button onclick="addBlog();">Voeg nieuwe blog toe</button>
<?php } ?>
</div>