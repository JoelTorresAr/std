<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
Route::get('/mesa_partes_virtual', 'MesaPartesController@index')->name('partes');
Route::get('/mesa_partes_virtual/p_natural', 'MesaPartesController@personaNatural')->name('partes_p_natural');
Route::get('/mesa_partes_virtual/p_juridica', 'MesaPartesController@personaJuridica')->name('partes_p_juridica');
Route::get('/mesa_partes_virtual/download-files', 'api\ParteController@downloadDocumentos');
Route::get('/spa', 'SpaController@index')->name('spa.index');
Route::get('/spa/{any}', 'SpaController@index')->name('spa')->where('any', '.*');
