<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class UsersController extends Controller
{
    public function crearUsuario(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'rut' => 'required',
            'enrollment' => 'required',
            'email' => 'required|email|unique:users',
            'name' => 'required',
            'surname' => 'required',
            'password' => 'required',
            'profile' => 'required',
        ]);

        if ($validator->fails()) {
            return ['errors'=>$validator->errors()];
        }

        $rut = $request->input('rut');
        $enrollment = $request->input('enrollment');
        $email = $request->input('email');
        $name = $request->input('name');
        $surname = $request->input('surname');
        $password = $request->input('password');
        $profile = $request->input('profile');

        $user = User::create(
        [
        'rut' => $rut,
        'enrollment' => $enrollment,
        'email' => $email,
        'name' => $name,
        'surname' => $surname,
        'password' => bcrypt($password),
        'profile' => $profile,
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
            'email' => 'required|email',
            'name' => 'required',
            'surname' => 'required',
            'password' => 'required',
            'profile' => 'required',
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
        $profile = $request->input('profile');


        $user = User::find($id);

        $user->rut=$rut;
        $user->enrollment = $enrollment;
        $user->email = $email;
        $user->name=$name;
        $user->surname = $surname;
        $user->password = $password;
        $user->profile = $profile;

        $user->save();

        return response()->json([
            'status' => 200,
            'msg' => 'Usuario modificado correctamente.'
        ]);
    }

    public function eliminarUsuario($idEstudiante)
    {
        $user = User::find($idEstudiante);
        $user->delete();
        return response()->json([
            'status' => 200,
            'msg' => 'Usuario eliminado correctamente.'
        ]);
    }

    /**
     * Funcion que retorna todos los estudiantes del sistema en formato json
     */
    public function getEstudiantes()
    {
        $array = User::where('profile', '=', 'student')->get();
        if(empty($array))
        {
            return response()->json([
                'status' => 500,
                'msg' => 'No existen estudiantes'
            ]);
        }
        return response()->json($array);
    }

    /**
     * Funcion que retorna todos los profesores del sistema en formato json
     */
    public function getProfesores()
    {
        $array = User::where('profile', '=', 'teacher');
        if(empty($array))
        {
            return response()->json([
                'status' => 500,
                'msg' => 'No existen profesores'
            ]);
        }
        return response()->json($array);
    }

    /**
     * Funcion que retorna todos los usuarios del sistema (Excepto la informacion del admin)
     */
    public function getUsuarios()
    {
        $array = User::where('profile', '=', 'teacher')->orWhere('profile', '=', 'student')->get();
        if(empty($array))
        {
            return response()->json([
                'status' => 500,
                'msg' => 'No hay existencias profesores/estudiantes'
            ]);
        }
        return response()->json($array);

    }

    /**
     * Retorna la informacion de un usuario en especifico.
     */
    public function getUser(Request $request, $id)
    {
        $array = User::find($id);
        if(empty($array))
        {
            return response()->json([
                'status' => 500,
                'msg' => 'Usuario no encontrado'
            ]);
        }
        return response()->json($array);
    }

}
