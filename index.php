<?php
ini_set('display_errors', '1');
require 'vendor/autoload.php';

$uri 		= "mongodb://tcar:kutikula123@ds063180.mongolab.com:63180/billboard";
$client 	= new MongoClient($uri);
$dbname     = $client->selectDB('billboard');
$users      = $dbname->users;

$app = new \Slim\Slim(array(
    'debug' => true,
    'templates.path' => 'client'
));

$app->get('/', function () use ($app) {
    $app->render('index.html');
});

$app->get('/logins', function () use ($app, $users) {
    $logins = array();
    foreach ($users->find() as $user) {
        $logins[] = $user['Login'];
    }
    $app->response()->header("Content-Type", "application/json");
    $app->response->setBody(json_encode($logins));
});

$app->run();
