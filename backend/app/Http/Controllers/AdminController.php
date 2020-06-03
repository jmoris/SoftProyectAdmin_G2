<?php

namespace App\Http\Controllers;

use App\Course;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use \App\Tools\UserProfile as UserProfile;
class AdminController extends Controller
{
    //

    public function crearUsuario(Request $request)
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

        return response()->json([
            'status' => 200,
            'msg' => 'Curso creado correctamente.'
        ]);
    }

    /**
     * Asignar un profesor a un curso
     */
    public function asignarProfesorACurso(Request $request)
    {
        $this->validate($request, [
            'iduser' => 'required',
            'idcourse' => 'required',
        ]);
        $user = User::find($request->iduser);
        $course = Course::find($request->idcourse);
        if($user!=null&&$course!=null){
            if(UserProfile::isTeacher($user)){
                $course->users()->sync($user, false);
                return response()->json([
                    'status' => 200,
                    'msg' => 'Profesor asignado correctamente.'
                ]);
            }else{
                return response()->json([
                    'status' => 500,
                    'msg' => 'El usuario no es profesor.'
                ]);
            }
        }else{
            return response()->json([
                'status' => 500,
                'msg' => 'El usuario/curso no existe.'
            ]);
        }
    }










}
