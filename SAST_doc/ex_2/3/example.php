<?php
require_once('../_helpers/strip.php');


if(isset($_GET['name'])) {
    $sanitized_name = htmlspecialchars($_GET['name'], ENT_QUOTES, 'UTF-8');
    echo 'Hello, ' . $sanitized_name;
} else {
    echo 'Hello,';
}

?>