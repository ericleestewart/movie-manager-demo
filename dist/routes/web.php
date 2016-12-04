<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of the routes that are handled
| by your application. Just tell Laravel the URIs it should respond
| to using a Closure or controller method. Build something great!
|
*/

// The application's Splash page.
Route::get('/', function () {
    return view('splash');
});

// The applications Home page.
Route::get('/home', function () {
    return view('home');
});
