<?php
    $kl = fopen("./killerlist.txt", "a");

    $login = $_GET["login"];
    $day = intval($_GET["day"]);
    $hash = $_GET["hash"];
    $quick = $_GET["quick"];
    $ans = $_GET["ans"];
    fwrite($kl, $login . "$" . $day . "$" . $hash . "$" . $quick . "\n");

    $cf = fopen("./cheatfile.txt", "a");
    fwrite($cf, $login . "$" . $day . "$" . $ans . "\n");
?>
