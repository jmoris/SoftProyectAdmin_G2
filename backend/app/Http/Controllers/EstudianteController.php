<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class EstudianteController extends Controller
{
    //


    public function addRequerimientoUsuario(Request $request)
    {

    }

    public function eliminarRequerimientoUsuario(Request $request)
    {

    }

    public function editarRequerimientoUsuario(Request $request)
    {

    }

    public function addRequerimientoSoftware(Request $request)
    {
        
    }

    public function eliminarRequerimientoSoftware(Request $request)
    {
        
    }

    public function editarRequerimientoSoftware(Request $request)
    {
        
    }

    public function addCasoDePrueba(Request $request)
    {
        
    }

    public function eliminarCasoDePrueba(Request $request)
    {
        
    }

    public function editarCasoDePrueba(Request $request)
    {
        
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







}
