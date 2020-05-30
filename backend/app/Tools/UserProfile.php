<?php

namespace App\Tools;

class UserProfile
{
    /**
     * Metodo para verificar si el usuario es un profesor.
     */
    public static function isTeacher($user){
        return ($user->profile=='Teacher'||$user->profile=='teacher')?true:false;
    }
    /**
     * Metodo para verificar si el usuario es un ayudante.
     */
    public static function isAssistant($user){
        return ($user->profile=='Assistant'||$user->profile=='assistant')?true:false;
    }
}
