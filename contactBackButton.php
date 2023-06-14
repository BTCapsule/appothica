<?php
if (isset($_POST['Email'])) {

    // EDIT THE FOLLOWING TWO LINES:
  $email_to = "support@appothica.com";
    $email_subject = "New form submissions";

    function problem($error)
    {
        echo "We're sorry, but there were error(s) found with the form you submitted.";
        echo "These errors appear below.<br><br>";
        echo $error . "<br><br>";
        echo "Please go back and fix these errors.<br><br>";
        die();
    }

    // validation expected data exists
    if (
        !isset($_POST['Name']) ||
        !isset($_POST['Email']) ||
        !isset($_POST['Message']) ||
				!isset($_POST['Spam'])
					
    ) {
        problem("We're sorry, but there appears to be a problem with the form you submitted.");
    }
		
		
		

    $name = $_POST['Name']; // required
    $email = $_POST['Email']; // required
    $message = $_POST['Message']; // required
    $spam = $_POST['Spam'];
		
		
    $error_message = "";
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';

    if (!preg_match($email_exp, $email)) {
        $error_message .= 'The Email address you entered does not appear to be valid.<br>';
    }

    $string_exp = "/^[A-Za-z .'-]+$/";

    if (!preg_match($string_exp, $name)) {
        $error_message .= 'The Name you entered does not appear to be valid.<br>';
    }

    if (strlen($message) < 2) {
        $error_message .= 'The Message you entered do not appear to be valid.<br>';
    }
		
		if (strlen($spam) > 1){
			$error_message .= 'Go away spam bot. <br>';
			
			
		}
		
		

    if (strlen($error_message) > 0) {
        problem($error_message);
    }
		
		
	 $email_message = "Form details below.\n\n";

    function clean_string($string)
    {
        $bad = array("content-type", "bcc:", "to:", "cc:", "href");
        return str_replace($bad, "", $string);
    }

    $email_message .= "Name: " . clean_string($name) . "\n";
    $email_message .= "Email: " . clean_string($email) . "\n";
    $email_message .= "Message: " . clean_string($message) . "\n";

    // create email headers
    $headers = 'From: ' . $email . "\r\n" .
        'Reply-To: ' . $email . "\r\n" .
        'X-Mailer: PHP/' . phpversion();
    @mail($email_to, $email_subject, $email_message, $headers);
?>

    <!-- INCLUDE YOUR SUCCESS MESSAGE BELOW -->

<?php

header("Location: http://appothica.com/success");
die();

  $url = htmlspecialchars($_SERVER['HTTP_REFERER']);
  echo "<a href='$url'>back</br></br></a>"; 
	?>		
		
		
    Thanks for getting in touch. We'll get back to you soon.

<?php
}
?>