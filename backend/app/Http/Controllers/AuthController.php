<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use JWTAuth;
use App\User;
use Illuminate\Support\Facades\DB;
use Tymon\JWTAuth\Exceptions\JWTException;

class AuthController extends Controller
{
    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(Request $request)
    {
        $input = $request->only('email', 'password');
        $token = null;

        if(!DB::connection()->getDatabaseName()){
            return response()->json([
                'success' => false,
                'message' => 'No se pudo conectar con la base de datos.',
            ]);
        }

        $user = User::where('email', $request->email)->first();
        if($user!=null){
                if (!$token = JWTAuth::attempt($input)) {
                    return response()->json([
                        'success' => false,
                        'message' => 'La contraseña del usuario es incorrecta.',
                    ], 401);
                }
                return response()->json([
                    'success' => true,
                    'token' => $token,
                ]);
        }else{
            return response()->json([
                'success' => false,
                'message' => 'El usuario no existe.',
            ]);
        }


    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     * @throws \Illuminate\Validation\ValidationException
     */
    public function logout(Request $request)
    {
        $this->validate($request, [
            'token' => 'required'
        ]);

        try {
            JWTAuth::invalidate($request->token);

            return response()->json([
                'success' => true,
                'message' => 'User logged out successfully'
            ]);
        } catch (JWTException $exception) {
            return response()->json([
                'success' => false,
                'message' => 'Sorry, the user cannot be logged out'
            ], 500);
        }
    }
}
