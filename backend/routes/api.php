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

    Route::get('users', 'UsersController@getUsuarios');
    Route::get('users/{id}', 'UsersController@getUser');
    Route::post('users', 'UsersController@crearUsuario');
    Route::put('users/{id}', 'UsersController@editarUsuario');
    Route::delete('users/{id}', 'UsersController@eliminarUsuario');

    Route::get('courses', 'CoursesController@getCursos');
    Route::post('courses', 'CoursesController@crearCurso');
    Route::put('courses/{id}', 'CoursesController@editarCurso');
    Route::delete('courses/{id}', 'CoursesController@eliminarCurso');
    Route::post('courses/assign', 'CoursesController@asignarProfesorACurso');

    Route::get('projects', 'ProjectsController@getProyectos');
    Route::get('projects/{id}', 'ProjectsController@getProyecto');
    Route::post('projects', 'ProjectsController@crearProyecto');
    Route::put('projects/{id}', 'ProjectsController@editarProyecto');
    Route::delete('projects/{id}', 'ProjectsController@eliminarProyecto');
    Route::post('projects/assign', 'ProjectsController@agregarAlumnosAProyecto');
    Route::get('projects/list/{id}', 'ProjectsController@getAlumnosProyecto');
    Route::delete('projects/detach', 'ProjectsController@eliminarAlumnoDeUnProyecto');

});
