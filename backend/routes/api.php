<?php

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

Route::post('login', 'AuthController@login');
Route::post('register', 'AuthController@register');

Route::group(['middleware' => 'api'], function () {
    Route::get('logout', 'AuthController@logout');

    Route::get('admin/users', 'AdminController@getUsuarios');
    Route::post('admin/users', 'AdminController@crearUsuario');
    Route::put('admin/users/{id}', 'AdminController@editarUsuario');
    Route::delete('admin/users/{id}', 'AdminController@eliminarUsuario');
    Route::post('admin/courses/assign', 'AdminController@asignarProfesorACurso');


    Route::get('teacher/projects', 'DocenteController@getProyectos');
    Route::get('teacher/projects/{id}', 'DocenteController@getProyecto');
    Route::post('teacher/projects', 'DocenteController@crearProyecto');
    Route::put('teacher/projects/{id}', 'DocenteController@editarProyecto');
    Route::delete('teacher/projects', 'DocenteController@eliminarProyecto');
    Route::post('teacher/projects/assign', 'DocenteController@agregarAlumnosAProyecto');
    Route::get('teacher/projects/list/{id}', 'DocenteController@getAlumnosProyecto');
    Route::delete('teacher/projects/detach', 'DocenteController@eliminarAlumnoDeUnProyecto');
});
