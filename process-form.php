<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstName = $_POST['first_name'];
    $lastName = $_POST['last_name'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $company = $_POST['company'];

    $to = 'your_email@example.com'; // Replace with your email address
    $subject = 'New Contact Form Submission';
    $message = "Name: $firstName $lastName\n";
    $message .= "Phone: $phone\n";
    $message .= "Email: $email\n";
    $message .= "Company: $company\n";

    $headers = "From: webmaster@example.com"; // Replace with a valid address on your domain

    if(mail($to, $subject, $message, $headers)) {
        echo "Thank you for contacting us!";
    } else {
        echo "Mail sending failed.";
    }
}
?>
