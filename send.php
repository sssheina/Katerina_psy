<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';
require '../private/dbfunctions/dbmain.php';

# проверка, что ошибки нет
if (!error_get_last()) {

    $recordNumber = getNextRecordNumber();
    $recordNumberS = strval($recordNumber);
    $emailSettings = getEmailSettings();


    // Переменные, которые отправляет пользователь
    $text = $_POST['text'];
    
    
    // Формирование самого письма
    $title = "Заголовок письма";

    // Load HTML template
    // $html = file_get_contents("template.html");
    $html = trim(file_get_contents("template.html"));

    // Replace placeholders with actual data
    $html = str_replace("{TEXT}", $text, $html);
    $html = str_replace("{RECORDNUMBER}", $recordNumber, $html);

    // Set the email body
    $body = $html;
    
    // Настройки PHPMailer
    $mail = new PHPMailer\PHPMailer\PHPMailer();
    
    $mail->isSMTP();
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth = true;
    //$mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['data']['debug'][] = $str;};
    
    $mail->Host = $emailSettings->host; // SMTP сервера вашей почты
    $mail->Username = $emailSettings->username; // Логин на почте
    $mail->Password = $emailSettings->password; // Пароль на почте
    $mail->SMTPSecure = $emailSettings->smtpsecure;
    $mail->Port = $emailSettings->port;
    $mail->setFrom($emailSettings->fromaddress, $emailSettings->fromname); // Адрес самой почты и имя отправителя
  
    // Получатель письма
    $mail->addAddress($emailSettings->toaddress); 
    $mail->isHTML(true);
    $mail->Subject = $title;
    $mail->Body = $body;
    
    // Отправка сообщения
    $mail->isHTML(true);
    $mail->Subject = $title;
    $mail->Body = $body;
    

    
    
  // Проверяем отправленность сообщения
  if ($mail->send()) {
      $data['result'] = "success";
      $data['info'] = "Сообщение успешно отправлено!";
  } else {
      $data['result'] = "error";
      $data['info'] = "Сообщение не было отправлено. Ошибка при отправке письма";
      $data['desc'] = "Причина ошибки: {$mail->ErrorInfo}";
  }
    
} else {
    $data['result'] = "error";
    $data['info'] = "В коде присутствует ошибка";
    $data['desc'] = error_get_last();
}

// Отправка результата
header('Content-Type: application/json');
echo json_encode($data);

?>