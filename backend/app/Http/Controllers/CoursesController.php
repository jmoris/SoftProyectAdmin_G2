<?php

namespace App\Http\Controllers;

use App\Course;
use App\Tools\UserProfile;
use App\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;
use PhpOffice\PhpSpreadsheet\IOFactory;
use Illuminate\Support\Str;

class CoursesController extends Controller
{

    public function getCursos(){
        return Course::with('user')->get();
    }

    public function getCurso($id){
        $curso = Course::where('id', $id)->with('user')->first();
        if($curso!=null){
            return response()->json($curso);
        }else{
            return response()->json([
                'msg' => 'El curso no existe'
            ], 500);
        }
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
        $user = Auth::user();
        $curso = new Course();
        $curso->name = $request->name;
        $curso->year = $request->year;
        $curso->semester = $request->semester;
        $curso->idUser = $user->id;
        $curso->save();

        return response()->json([
            'status' => 200,
            'msg' => 'Curso creado correctamente.'
        ]);
    }

    /**
     * Editar un curso
     */
    public function editarCurso(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'year' => 'required',
            'semester' => 'required',
            'teacher_id' => 'required',
        ]);

        if ($validator->fails()) {
            return $validator->errors();
        }
        $curso = Course::find($id);
        $curso->name = $request->name;
        $curso->year = $request->year;
        $curso->semester = $request->semester;
        $curso->idUser = $request->teacher_id;
        //Auth::user()->id;
        $curso->save();

        return response()->json([
            'status' => 200,
            'msg' => 'Curso editado correctamente.'
        ]);
    }

    public function eliminarCurso($id)
    {
        $user = Course::find($id);
        $user->delete();
        return response()->json([
            'status' => 200,
            'msg' => 'Curso eliminado correctamente.'
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

    public function getUserList(Request $request, $id){
        $curso = Course::find($id);
        if($curso!=null){
            return response()->json($curso->users);
        }else{
            return response()->json([
                'msg' => 'El curso no existe'
            ], 500);
        }
    }

    public function createAndAdd(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'year' => 'required',
            'semester' => 'required',
            'teacher_id' => 'required',
            'students' => 'required|array',
        ]);

        if ($validator->fails()) {
            return ['errors'=>$validator->errors()];
        }

        $curso = new Course();
        $curso->name = $request->name;
        $curso->year = $request->year;
        $curso->semester = $request->semester;
        $curso->idUser = $request->teacher_id;

        try {
            $curso->save();
            $n = 0;
            foreach($request->students as $student){
                $curso->users()->sync($student['user_id'], false);
                $n++;
            }
        }catch(Exception $ex){
            return response()->json([
                'status' => false,
                'msg' => 'El curso no se pudo crear.',
                'error' => $ex->getMessage()
            ]);
        }

        return response()->json(["status" => true, "enrolled" => $n, "msg" => "Proyecto creado correctamente."]);
    }

    function uploadFile(Request $request, $id){
        $this->validate($request, [
        'file'  => 'required|mimes:xls,xlsx'
        ]);

        $curso = Course::find($id);
        try{

        $path = $request->file('file')->getRealPath();

        $spreadsheet = IOFactory::load($path);

        $cellNombre = $email = $spreadsheet->getActiveSheet()->getCell('A1')->getValue();
        $cellApellido = $email = $spreadsheet->getActiveSheet()->getCell('B1')->getValue();
        $cellEmail = $email = $spreadsheet->getActiveSheet()->getCell('C1')->getValue();
        if($cellNombre!='Nombre'&&$cellApellido!='Apellido(s)'&&$cellEmail!='Dirección de correo')
            return response()->json([
                'success' => false,
                'msg' => 'El formato del archivo es incorrecto.'
            ]);
        $lectura = true;
        $contador = 2;
        $cargados = 0;
        $errores = [
            'inexistentes' => [],
            'existentes' => []
        ];

        while($lectura){
            $nombre = $spreadsheet->getActiveSheet()->getCell('A'.$contador)->getValue();
            $apellido = $spreadsheet->getActiveSheet()->getCell('B'.$contador)->getValue();
            $email = $spreadsheet->getActiveSheet()->getCell('C'.$contador)->getValue();
            if($email==''||$email==null){
                $lectura = false;
                break;
            }
            $user = User::where('email', $email)->first();
            if($user==null){
                $errores['inexistentes'][] = (string)$email;
                $usuario = new User();
                $usuario->name = $nombre;
                $usuario->surname = $apellido;
                $usuario->email = (string)$email;
                $password = Str::random(8);
                $usuario->password = bcrypt($password);
                $usuario->rut = "1-9";
                $usuario->profile = "student";
                $usuario->save();

                \App\Jobs\InvitarUsuario::dispatch((string)$email, ($nombre.' '.$apellido), $password)->onQueue('invitaciones');

                $curso->users()->sync($usuario, false);
            }else{
                $exists = $user->courses->contains($id);
                if($exists){
                    $errores['existentes'][] = (string)$email;
                }else{
                    $curso->users()->sync($user, false);
                    $cargados++;
                }
            }
            $contador++;
        }

        return response()->json([
            'success' => true,
            'msg' => "Carga masiva de usuarios finalizada.",
            'stats' => [
                'cargados' => $cargados,
                'fallidos' => [
                    'inexistentes' => [
                        'cantidad' => count($errores['inexistentes']),
                        'detalle' => $errores['inexistentes']
                    ],
                    'existentes' => [
                        'cantidad' => count($errores['existentes']),
                        'detalle' => $errores['existentes']
                    ]
                ],
            ]
        ]);
        }catch(Exception $ex){
            return $ex;
            return response()->json([
                'success' => false,
                'msg' => "Carga masiva de usuarios fallida.",
                'error' => $ex->getMessage()
            ]);
        }
    }

    /*

    public function asignarAyudanteACurso(Request $request)
    {
        $this->validate($request, [
            'idCurso' => 'required',
            'idAyudante' => 'required',
        ]);

        $idCurso = $request->input('idCurso');
        $idAyudante = $request->input('idAyudante');

        $curso = Course::find($idCurso);
        $ayudante = User::find($idAyudante);


    */
}
