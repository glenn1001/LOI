<?php if ($error) {?>
    <div id="login-error"><?php echo $error; ?></div>
<?php } ?>
<?php if ($user) {?>
    Welkom <?php echo $user; ?><br />
    <button onclick="logout();">Logout</button>
<?php } else {?>
    <div class="form">
        Gebruikersnaam:<br />
        Wachtwoord:
    </div>
    <div class="form">
        <input type="text" id="user" value="<?php echo $_GET['user']; ?>" onkeypress="loginByEnter(event);" /><br />
        <input type="password" id="pass" onkeypress="loginByEnter(event);" />
    </div>
    <button onclick="login();">Login</button>
<?php } ?>