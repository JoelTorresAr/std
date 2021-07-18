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

Route::group(['namespace' => 'api'], function () {
    Route::prefix('usuario')->group(function () {
        Route::post('index', 'UsuarioController@index');
        Route::post('store', 'UsuarioController@store');
    });
    Route::prefix('rol')->group(function () {
        Route::post('index', 'RolController@index');
        Route::post('store', 'RolController@store');
    });
    Route::prefix('parte')->group(function () {
        Route::post('index', 'ParteController@index');
        Route::post('estados-select', 'ParteController@estados');
        Route::post('persona-natural/store', 'ParteController@storeNatural');
        Route::post('persona-juridica/store', 'ParteController@storeJuridica');
        Route::post('estado-update', 'ParteController@estadoUpdate');
    });
    Route::prefix('solicitante')->group(function () {
        Route::post('search', 'SolicitanteController@search');
    });
});
