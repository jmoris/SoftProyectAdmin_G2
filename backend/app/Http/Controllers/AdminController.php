<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AdminController extends Controller
{
    //

    public function crearUsuario(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'id' => 'required',
            'rut' => 'required',
            'enrollment' => 'required',
            'email' => 'required',
            'name' => 'required|email',
            'surname' => 'required',
            'password' => 'required',
            'role' => 'required',
        ]);

        if ($validator->fails()) {
            return redirect('post/create')
                        ->withErrors($validator)
                        ->withInput();
        }

        $id = $request->input('id');
        $rut = $request->input('rut');
        $enrollment = $request->input('enrollment');
        $email = $request->input('email');
        $name = $request->input('name');
        $surname = $request->input('surname');
        $password = $request->input('password');
        $role = $request->input('role');

        $user = User::create(
        ['id' => $id,
        'rut' => $rut,
        'enrollment' => $enrollment,
        'email' => $email,
        'name' => $name,
        'surname' => $surname,
        'password' => $password,
        'role' => $role,
        ]);

        $user->save();
    }

    public function editarUsuario(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'id' => 'required',
            'rut' => 'required',
            'enrollment' => 'required',
            'email' => 'required',
            'name' => 'required|email',
            'surname' => 'required',
            'password' => 'required',
            'role' => 'required',
        ]);

        if ($validator->fails()) {
            return redirect('post/create')
                        ->withErrors($validator)
                        ->withInput();
        }

        $id = $request->input('id');
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
        $validator = Validator::make($request->all(), [
            'id' => 'required',
            'rut' => 'required',
            'enrollment' => 'required',
            'email' => 'required',
            'name' => 'required|email',
            'surname' => 'required',
            'password' => 'required',
            'role' => 'required',
        ]);

        if ($validator->fails()) {
            return redirect('post/create')
                        ->withErrors($validator)
                        ->withInput();
        }

        $id = $request->input('id');
        $user = User::find($id);
        $user->delete();
    }

    /**
     * Crear un curso 
     */
    public function crearCurso(Request $request)
    {

    }

    /**
     * Asignar un profesor a un curso
     */
    public function asignarProfesorACurso(Request $request)
    {
        

    } 



    
    


    


}
