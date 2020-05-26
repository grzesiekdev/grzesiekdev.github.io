<?php
    if(!isset($_POST['submit']))
    {
        echo "You need to fill the form!";
    }
    else
    {
        $email = $_POST['email'];
        $message = $_POST['message'];
        $check = $_POST['check'];

        if(empty($email) || empty($message) || !isset($check))
        {
            echo "Email, message and checkbox are mandatory!";
        }
        else
        {
            $email_to = 'grzesiekb@onet.pl';
            $email_subj = 'New form submission';
            $email_body = 'You have new message from: $email \n'.
            'message: \n $message';

            $header = 'From: '.$email;
            mail($email_to, $email_subj, $message, $header);
            echo 'Thank you. I will contact with you as soon as possible.';
        }

    }

?>
