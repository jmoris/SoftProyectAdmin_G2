<?php

namespace App\Http\Controllers;

use App\UserRequirement;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class UserRequirementController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $ur = UserRequirement::all();
        return response()->json($ur);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, $project_id)
    {
        $validator = Validator::make($request->all(), [
            'source' => 'required',
            'cost' => 'required',
            'internalId' => 'required',
            'stability' => 'required',
            'priority' => 'required',
            'state' => 'required',
            'type' => 'required',
            'idUser' => 'required',
            'idIncrement' => 'required',
            'description' => 'required'
        ]);

        if ($validator->fails()) {
            return $validator->errors();
        }

        $usrq = new UserRequirement();
        $usrq->internalId = $request->internalId;
        $usrq->source = $request->source;
        $usrq->cost = $request->cost;
        $usrq->stability = $request->stability;
        $usrq->priority = $request->priority;
        $usrq->state = $request->state;
        $usrq->idUser = $request->idUser;
        $usrq->idIncrement = $request->idIncrement;
        $usrq->type = $request->type;
        $usrq->project_id = $project_id;
        $usrq->description = $request->description;
        $usrq->save();

        return response()->json([
            'success' => true,
            'msg' => 'El requisito de usuario fue agregado exitosamente.'
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $ur = UserRequirement::find($id);
        if($ur){
            return response()->json($ur);
        }else{
            return response()->json([
                'success' => false,
                'msg' => 'El requisito de usuario no existe en la base de datos.'
            ]);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'source' => 'required',
            'cost' => 'required',
            'stability' => 'required',
            'priority' => 'required',
            'state' => 'required',
            'type' => 'required',
            'idUser' => 'required',
            'idIncrement' => 'required'
        ]);

        if ($validator->fails()) {
            return $validator->errors();
        }

        $usrq = UserRequirement::find($id);
        $usrq->source = $request->source;
        $usrq->cost = $request->cost;
        $usrq->stability = $request->stability;
        $usrq->priority = $request->priority;
        $usrq->state = $request->state;
        $usrq->idUser = $request->idUser;
        $usrq->idIncrement = $request->idIncrement;
        $usrq->type = $request->type;
        $usrq->save();

        return response()->json([
            'success' => true,
            'msg' => 'El requisito de usuario fue actualizado exitosamente.'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $usrq = UserRequirement::find($id);
        if($usrq){
            $usrq->delete();
            return response()->json([
                'success' => true,
                'msg' => 'Requisito de usuario eliminado correctamente.'
            ]);
        }
        return response()->json([
            'success' => false,
            'msg' => 'No se puede eliminar el requisitos de ususario.'
        ]);
    }
}
