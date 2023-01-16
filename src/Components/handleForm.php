<?php
$name = $_POST['Fname' + " " + "Lname"];
$visitor_email = $_POST['email'];
$message = $_POST['phone'];
$email_from = 'ovilla1023@gmail.com';

$email_subject = "New Form submission";

$email_body = "You have received a new message from the user $name.\n" .
    "Here is the message:\n $message";

$to = "ovilla1023@gmail.com";

$headers = "From: $email_from \r\n";

$headers .= "Reply-To: $visitor_email \r\n";

mail($to, $email_subject, $email_body, $headers);
?>