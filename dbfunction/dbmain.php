<?php

require 'dbinclude.php';

const DB_RETURN_CODE_OK = 0;
const DB_RETURN_CODE_CONNECTION_FAILED = 1;
//define(DB_RETURN_CODE_OK, 0);
//define(DB_RETURN_CODE_CONNECTION_FAILED, 1);


class EmailSettings{
    public $host;
    public $username;
    public $password;
    public $smtpsecure;
    public $port;
    public $fromaddress;
    public $fromname;
    public $toaddress;
}


function getNextRecordNumber(){
    $dbcredentials = $GLOBALS["dbcredentials"];
    $retval = 0;
    
    // Create connection
    $conn = mysqli_connect($dbcredentials->servername, $dbcredentials->username, $dbcredentials->password, $dbcredentials->database);
    
    if (!$conn) {
        throw new Exception("Cannot connect to the database");
    }    
    else {
        
        //Get the last record number
        $sql = "SELECT LastRecordNumber FROM LastRecordNumber";
        
        $result = $conn->query($sql);
        if($result->num_rows > 0){
            $row = $result->fetch_assoc();
            
            $retval = $row["LastRecordNumber"];
        } else {
            throw new Exception("No data returned.");
        }
        
        //Advance to the new record number
        $retval++;
        
        //Store the new record number
        $sql = "UPDATE LastRecordNumber SET LastRecordNumber = $retval";
        
         if($conn->query($sql) === TRUE){
             mysqli_close($conn);
             return $retval;
         } else {
            throw new Exception("Cannot update the database");
         }
        
    }
}


function getEmailSettings(){
    $dbcredentials = $GLOBALS["dbcredentials"];
 
    // Create return object
    $retval = new EmailSettings();
    
    // Create connection
    $conn = mysqli_connect($dbcredentials->servername, $dbcredentials->username, $dbcredentials->password, $dbcredentials->database);
    
    if (!$conn) {
        throw new Exception("Cannot connect to the database");
    }    
    else {
        
        //Get the email settings
        $sql = "SELECT Host, Username, Password, SMTPSecure, Port, FromAddress, FromName, ToAddress FROM RegistrationEmailSettings WHERE Id = 1";
        
        $result = $conn->query($sql);
        if($result->num_rows > 0){
            $row = $result->fetch_assoc();
            
            $retval->host = $row["Host"];
            $retval->username = $row["Username"];
            $retval->password = $row["Password"];
            $retval->smtpsecure = $row["SMTPSecure"];
            $retval->port = $row["Port"];
            $retval->fromaddress = $row["FromAddress"];
            $retval->fromname = $row["FromName"];
            $retval->toaddress = $row["ToAddress"];
        } else {
            throw new Exception("No data returned.");
        }
        
        mysqli_close($conn);
        return $retval;
        
    }
}


?>