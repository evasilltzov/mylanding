<?php

if( isset($_POST)) {
    $name = $_POST['name'];
    $phone = $_POST['phone'];
} else {
    exit();
}

send_data_form_to_email( $name, $phone );

function send_data_form_to_email( $name, $phone ) {
    echo "<pre>";
    print_r($name);
    echo "</pre>";

    echo "<pre>";
    print_r($phone);
    echo "</pre>";
}
