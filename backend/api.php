<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET');
header('Access-Control-Allow-Headers: Content-Type');

// Path to your products.json
$jsonFile = __DIR__ . '/../src/data/products.json';

if (file_exists($jsonFile)) {
    $products = file_get_contents($jsonFile);
    echo $products;
} else {
    echo json_encode(['error' => 'Products file not found', 'path' => $jsonFile]);
}
?>