<?php
ini_set('display_errors', '1');
require 'vendor/autoload.php';

$uri    = "mongodb://tcar:kutikula123@ds063180.mongolab.com:63180/billboard";
$client = new MongoClient($uri);
$dbname = $client->selectDB('billboard');

$api = new \UserApp\API('54e0a91dd2235', 'g4EkA_oqSrCw38SZXObpuw');

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

$app->post('/post', function () use ($app, $dbname) {
	$posts = $dbname->posts;
    $req   = json_decode($app->request->getBody());
    $dbname->posts->insert(array(
    	'UserId' 		 => $req->userId,
    	'Title'  		 => $req->title,
    	'Text'	 		 => $req->text,
    	'DateCreation'   => $req->dateCreation
    ));
});

$app->delete('/post/:postId', function ($postId) use ($app, $dbname) {
	$posts = $dbname->posts;
    $dbname->posts->remove(array(
        '_id' => new MongoId($postId)
    ));
});

$app->put('/post/:postId', function ($postId) use ($app, $dbname) {
    $posts = $dbname->posts;
    $req   = json_decode($app->request->getBody());
    $newData = array('$set' => array('Title' => $req->post->Title, 'Text'  => $req->post->Text));
    $dbname->posts->update(array('_id' => new MongoId($postId)), $newData);
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

$app->get('/post', function () use ($app) {
    readfile('client/index.html');
});

$app->get('/allusers', function () use ($app, $api) {
    $users = [];
    foreach($api->user->search()->items as $items) {
        $users[] = $api->user->get(array(
            "user_id" => $items->user_id
        ))[0];
    }
    $app->response->setBody(json_encode($users));
});

$app->get('/post/:postId', function ($postId) use ($app, $dbname) {
    $posts = $dbname->posts;
    $post  = $posts->findOne(array('_id' => new MongoId($postId)));
    $app->response->setBody(json_encode($post));
});

$app->run();

