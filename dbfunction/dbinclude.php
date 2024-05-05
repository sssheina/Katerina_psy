<?php


class DBCredentials{
    public $servername;
    public $database;
    public $username;
    public $password;
}


$dbcredentials = new DBCredentials();
// $dbcredentials->servername = "localhost";
// $dbcredentials->database = "u788686832_main_db";
// $dbcredentials->username = "u788686832_ekaterina_ramz";
// $dbcredentials->password = "2:Yj+LK;yXCz";

$GLOBALS["dbcredentials"] = $dbcredentials;

?>