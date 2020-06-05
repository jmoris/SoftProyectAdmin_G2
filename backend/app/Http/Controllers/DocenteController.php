<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Project;
use Illuminate\Support\Facades\Validator;

class DocenteController extends Controller
{
    /**
     * Obtener todos los proyectos en los que participa un docente
     * 
     */
    public function getProyectos(Request $request)
    {
        
        $projecto = Project::All();
        if (empty($projecto))
        {
            $returnData = array(
                'status' => 'error',
                'message' => 'An error occurred!'
            );
            return Response::json($returnData, 500);
        }
        return Response::json($projecto);
    }

    /**
     * Obtener todo lo necesario de un proyecto
     */
    public function getProyecto(Request $request)
    {
        $id = $request->input('id');
        $projecto = Project::where('id', $id)->get();
        if (empty($projecto))
        {
            $returnData = array(
                'status' => 'error',
                'message' => 'An error occurred!'
            );
            return Response::json($returnData, 500);
        }
        return Response::json($projecto);
    }

    /**
     * Eliminar un proyecto en el que participa un docente
     */
    public function eliminarProyecto(Request $request)
    {
        $id = $request->input('id');

        try { 
            $projecto = Project::find($id);
            $projecto->delete();
            $returnData = array(
                'status' => 'complete',
                'message' => 'Eliminado'
            );
            return Response::json($returnData);

          } catch(\Illuminate\Database\QueryException $ex){ 
            dd($ex->getMessage()); 
            // Note any method of class PDOException can be called on $ex.
            $returnData = array(
                'status' => 'error',
                'message' => 'No se ha podido eliminar el proyecto'
            );
            return Response::json($returnData, 500);
          }
    }

    /**
     * Editar un proyecto en el que participa un docente
     */
    public function editarProyecto(Request $request)
    {
        $id = $request->input('id');
        $name = $request->input('name');
        $description = $request->input('description');

        $projecto = Project::where('id', $id)->get();

        if (empty($projecto))
        {
            $returnData = array(
                'status' => 'error',
                'message' => 'An error occurred!'
            );
            return Response::json($returnData, 500);
        }
        else
        {
            $projecto->name = $name;
            $projecto->description = $description;
            $projecto->save();

            $returnData = array(
                'status' => 'complete',
                'message' => 'Editado exitosamente'
            );
            return Response::json($returnData);
        }
    }



    /**
     * Un docente crea un proyecto
     */
    public function crearProyecto(Request $request)
    {
        $id = $request->input('id');
        $name = $request->input('name');
        $description = $request->input('description');

        $projecto = new Project;
        $projecto->id = $id;
        $projecto->name = $name;
        $projecto->description = $description;

        try { 
            $projecto->save();
            $returnData = array(
                'status' => 'complete',
                'message' => 'Se ha creado el proyecto de forma correcta'
            );
            return Response::json($returnData);

          } catch(\Illuminate\Database\QueryException $ex){ 
            dd($ex->getMessage()); 
            // Note any method of class PDOException can be called on $ex.
            $returnData = array(
                'status' => 'error',
                'message' => 'No se ha podido crear el proyecto'
            );
            return Response::json($returnData, 500);
          }
    }


    /**
     * Agregar una lista de alumnos a un proyecto 
     */
    public function agregarAlumnosAProyecto(Request $request)
    {
        /*
        $this->validate($request, [
            'arrayAlumnos' => 'required|array|min:3',
            'id' => 'required',
        ]);

        $arrayAlumnos = $request->input('arrayAlumnos');
        $idProyecto = $request->('id');
        */
    }
    
    /**
     * Elimina un alumno de un proyecto
     */
    public function eliminarAlumnoDeUnProyecto(Request $request)
    {


    }
    






    




}
