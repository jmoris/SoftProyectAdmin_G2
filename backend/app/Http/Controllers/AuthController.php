<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use JWTAuth;
use App\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
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

        try {
            DB::connection()->getPdo();
        } catch (\Exception $e) {
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
                    'user' => $user
                ]);
        }else{
            return response()->json([
                'success' => false,
                'message' => 'El usuario no existe.',
            ]);
        }


    }

    public function updateInfo(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'rut' => 'required',
            'enrollment' => 'required',
            'password' => 'required',
        ]);

        if ($validator->fails()) {
            return $validator->errors();
        }

        $user = Auth::user();

        $user = User::find($user->id);
        $user->rut=$request->rut;
        $user->enrollment=$request->enrollment;
        $user->password=bcrypt($request->password);

        $user->save();

        return response()->json([
            'status' => 200,
            'success' => true,
            'msg' => 'Usuario modificado correctamente.'
        ]);
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
