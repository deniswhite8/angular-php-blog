<?php
ini_set('display_errors', '1');
require '../vendor/autoload.php';

$uri    = "mongodb://tcar:kutikula123@ds063180.mongolab.com:63180/billboard";
$client = new MongoClient($uri);
$dbname = $client->selectDB('billboard');

$api = new \UserApp\API('54e0a91dd2235', 'g4EkA_oqSrCw38SZXObpuw');

$app = new \Slim\Slim([
    'debug' => true
]);

$app->get('/', function () use ($app) {
    readfile('index.html');
});

$app->post('/posts', function () use ($app, $dbname) {

    $posts     = $dbname->posts;
    $friends   = $dbname->friends;
    $userPosts = [];
    $req       = json_decode($app->request->getBody());
    $userId    = $req->userId;
    $ids       = $friends->findOne(['UserId' => $req->userId])['Friends'];

    if (is_null($ids)) $ids = [];
    array_unshift($ids, $userId);

    foreach ($dbname->posts->find() as $post) {
        foreach ($ids as $id) {
            if ($post['UserId'] == $id) {
                $userPosts[] = $post;
            }
        }
    }

    $app->response->setBody(json_encode($userPosts));

});

$app->post('/addpost', function () use ($app, $dbname) {

	$posts = $dbname->posts;
    $req   = json_decode($app->request->getBody());

    $dbname->posts->insert([
    	'UserId' 		 => $req->userId,
    	'Title'  		 => $req->title,
    	'Text'	 		 => $req->text,
    	'DateCreation'   => $req->dateCreation
    ]);

});

$app->get('/post/:postId', function ($postId) use ($app, $dbname) {

    $posts = $dbname->posts;
    $post  = $posts->findOne([
        '_id' => new MongoId($postId)
    ]);

    $app->response->setBody(json_encode($post));

});


$app->delete('/post/:postId', function ($postId) use ($app, $dbname) {

	$posts = $dbname->posts;

    $dbname->posts->remove([
        '_id' => new MongoId($postId)
    ]);

});

$app->put('/post/:postId', function ($postId) use ($app, $dbname) {

    $posts   = $dbname->posts;
    $req     = json_decode($app->request->getBody());

    $newData = ['$set' => [
        'Title' => $req->post->Title, 'Text'  => $req->post->Text
    ]];

    $dbname->posts->update([
        '_id' => new MongoId($postId)
    ], $newData);

});

$app->post('/addfriend/:friendId', function ($friendId) use ($app, $dbname) {

    $friends = $dbname->friends;
    $req     = json_decode($app->request->getBody());
    $userId  = $req->userId;

    if (!empty($friends->findOne(['UserId' => $userId]))) {
        $newData = ['$addToSet' => ['Friends' => $friendId]];
        $friends->update(['UserId' => $userId], $newData);
    }
    else {
        $friends->save([
            'UserId' => $userId,
            'Friends' => []
        ]);
        $newData = ['$addToSet' => ['Friends' => $friendId]];
        $friends->update(['UserId' => $userId], $newData);
    }

});

$app->get('/login', function () use ($app) {
    readfile('index.html');
});

$app->get('/signup', function () use ($app) {
    readfile('index.html');
});

$app->get('/friends', function () use ($app) {
    readfile('index.html');
});

$app->get('/allusers', function () use ($app, $api) {

    $users = [];

    foreach($api->user->search()->items as $items) {
        $users[] = $api->user->get([
            "user_id" => $items->user_id
        ])[0];
    }

    $app->response->setBody(json_encode($users));

});

$app->run();

