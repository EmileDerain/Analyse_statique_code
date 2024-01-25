<?php
if (isset($_GET["go"])) {
    $goValue = $_GET["go"];

    switch ($goValue) {
        case "site1":
            header("Location: site1");
            exit();
            break;

        case "site2":
            header("Location: site2");
            exit();
            break;

        default:
            header("Location: false_url_page.php");
            exit();
            break;
    }
} else {
    echo "No 'go' in the URL.";
}
?>
