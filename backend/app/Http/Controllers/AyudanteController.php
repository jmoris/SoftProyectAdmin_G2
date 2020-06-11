<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Tools\UserProfile as UserProfile;
use App\User;

class AyudanteController extends Controller
{
    //

    /**
     * Todos los cursos a los que pertenece un ayudante
     */
    public function getCursos(Request $request)
    {
        $user = auth()->user();
        if($user!=null){
            if(UserProfile::isAssistant($user)){
                return $user->courses;
            }else{
                return response()->json([
                    'status' => 500,
                    'msg' => 'El usuario no es ayudante.'
                ]);
            }
        }else{
            return response()->json([
                'status' => 500,
                'msg' => 'El usuario no existe.'
            ]);
        }
    }




}
