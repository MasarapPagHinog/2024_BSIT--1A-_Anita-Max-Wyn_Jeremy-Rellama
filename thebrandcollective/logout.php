<?php
session_start();

session_unset();
session_destroy();

header("Location: ./signin/sigin.php");
exit();
?>