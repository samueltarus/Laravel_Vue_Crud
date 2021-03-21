<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


// product Route
Route::get('/products', 'ProductController@index');
Route::post('/create-product', 'ProductController@store');
Route::get('/edit-product/{id}', 'ProductController@edit');
Route::post('/update-product/{id}', 'ProductController@update');
Route::delete('/delete-product/{id}', 'ProductController@destroy');

// supplier routes

Route::get('/suppliers', 'SupplierController@index');
Route::post('/create-supplier', 'SupplierController@store');
Route::get('/edit-supplier/{id}', 'SupplierController@edit');
Route::post('/update-supplier/{id}', 'SupplierController@update');
Route::delete('/delete-supplier/{id}', 'SupplierController@destroy');

// orders

Route::get('/orders', 'OrderController@index');
Route::post('/create-order', 'OrderController@store');
Route::get('/edit-order/{id}', 'OrderController@edit');
Route::post('/update-order/{id}', 'OrderController@update');
Route::delete('/delete-order/{id}', 'OrderController@destroy');

// order details


// charts

Route::get('order-chart','HomeController@order_chart');
Route::get('product-chart','HomeController@product_chart');



