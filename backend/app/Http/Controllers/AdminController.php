<?php

namespace App\Http\Controllers;

use App\Course;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class AdminController extends Controller
{
    //

    public function crearUsuario(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'rut' => 'required',
            'enrollment' => 'required',
            'email' => 'required',
            'name' => 'required|email',
            'surname' => 'required',
            'password' => 'required',
            'role' => 'required',
        ]);

        if ($validator->fails()) {
            return $validator->errors();
        }

        $rut = $request->input('rut');
        $enrollment = $request->input('enrollment');
        $email = $request->input('email');
        $name = $request->input('name');
        $surname = $request->input('surname');
        $password = $request->input('password');
        $role = $request->input('role');

        $user = User::create(
        [
        'rut' => $rut,
        'enrollment' => $enrollment,
        'email' => $email,
        'name' => $name,
        'surname' => $surname,
        'password' => bcrypt($password),
        'role' => $role,
        ]);

        $user->save();

        return response()->json([
            'status' => 200,
            'msg' => 'Usuario creado correctamente.'
        ]);
    }

    public function editarUsuario($id, Request $request)
    {
        $validator = Validator::make($request->all(), [
            'rut' => 'required',
            'enrollment' => 'required',
            'email' => 'required',
            'name' => 'required|email',
            'surname' => 'required',
            'password' => 'required',
            'role' => 'required',
        ]);

        if ($validator->fails()) {
            return $validator->errors();
        }

        $rut = $request->input('rut');
        $enrollment = $request->input('enrollment');
        $email = $request->input('email');
        $name = $request->input('name');
        $surname = $request->input('surname');
        $password = $request->input('password');
        $role = $request->input('role');


        $user = User::find($id);

        $user->rut=$rut;
        $user->enrollment = $enrollment;
        $user->email = $email;
        $user->name=$name;
        $user->surname = $surname;
        $user->password = $password;
        $user->role = $role;

        $user->save();
    }

    public function eliminarUsuario($idEstudiante)
    {
        $user = User::find($idEstudiante);
        $user->delete();
    }

    /**
     * Crear un curso
     */
    public function crearCurso(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'year' => 'required',
            'semester' => 'required',
        ]);

        if ($validator->fails()) {
            return $validator->errors();
        }
        $curso = new Course();
        $curso->name = $request->name;
        $curso->year = $request->year;
        $curso->semester = $request->semester;
        $curso->idUser = auth()->user()->id;
        $curso->save();
    }

    /**
     * Asignar un profesor a un curso
     */
    public function asignarProfesorACurso(Request $request)
    {


    }










}
