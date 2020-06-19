<?php

use App\Role;
use App\User;
use Illuminate\Database\Seeder;

class SeederInicial extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Se crean los roles
        $rol = new Role();
        $rol->name = "Jefe de proyecto";
        $rol->save();
        $rol = new Role();
        $rol->name = "Analista";
        $rol->save();
        $rol = new Role();
        $rol->name = "Implementador";
        $rol->save();
        $rol = new Role();
        $rol->name = "Testing";
        $rol->save();
        $rol = new Role();
        $rol->name = "Scrum master";
        $rol->save();
        $rol = new Role();
        $rol->name = "Diseñador";
        $rol->save();

        // Se crea usuario de prueba
        $user = new User();
        $user->name = "Usuario";
        $user->surname = "Prueba";
        $user->email = "usuario@prueba.cl";
        $user->password = bcrypt("prueba123");
        $user->rut = "12345678-9";
        $user->enrollment = "201540701";
        $user->profile = "admin";
        $user->save();

    }
}
