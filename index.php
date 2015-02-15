<?php
ini_set('display_errors', '1');
require 'vendor/autoload.php';

// the blog post class
class User {

  var $Login;
  var $Password;

}


$uri    = "mongodb://tcar:kutikula123@ds063180.mongolab.com:63180/billboard";
$client = new MongoClient($uri);
$dbname = $client->selectDB('billboard');

$app = new \Slim\Slim(array(
    'debug' => true
));

$app->get('/', function () use ($app) {
    readfile('client/index.html');
});

$app->post('/posts', function () use ($app, $dbname) {
	$posts = $dbname->posts;
	$userPosts = [];
    $req = json_decode($app->request->getBody());
    foreach ($dbname->posts->find() as $post) {
    	if ($post['UserId'] == $req->userId) {
        	$userPosts[] = $post;
    	}
    }
    $app->response->setBody(json_encode($userPosts));
});

$app->get('/login', function () use ($app) {
    readfile('client/index.html');
});

$app->get('/signup', function () use ($app) {
    readfile('client/index.html');
});

$app->get('/friends', function () use ($app) {
    readfile('client/index.html');
});

// $app->post('/registration', function () use ($app, $dbname) {
//     $req = json_decode($app->request->getBody());
//     $user = $dbname->users->findOne(array('Login' => $req->login));
//     if ($user['Login'] === $req->login) {
//     	$app->response->setBody(json_encode($user));
//     }
//     else {
//     	// $app->response->setBody(json_encode($user));
//     	$post = new User();
//     	$post->Login = $req->login;
//     	$post->Password = $req->password;
//     	$new_user = $post->save();
//     	$app->response->setBody(json_encode($new_user));
//     }
// });

$app->get('/allusers', function () use ($app, $dbname) {
    $allusers = array();
    foreach ($dbname->users->find() as $user) {
        $allusers[] = $user['Login'];
    }
    $app->response->setBody(json_encode($allusers));
});



$app->run();

