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
    public function index(Request $request)
    {
        $ur = UserRequirement::where('project_id', $request->project_id)->get();
        return response()->json($ur);
    }

    public function getNextId($id){
        $next_id = UserRequirement::withTrashed()->where('project_id', $id)->orderBy('internalId', 'desc')->first();
        if($next_id==null)
            return response()->json(['next_id' => 1]);
        return response()->json(['next_id' => $next_id->internalId + 1]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'source' => 'required',
            'cost' => 'required',
            //'internalId' => 'required',
            'stability' => 'required',
            'priority' => 'required',
            'status' => 'required',
            'project_id' => 'required',
            'description' => 'required',
            'increment_id' => 'required'
        ]);

        if ($validator->fails()) {
            return $validator->errors();
        }

        $usrq = new UserRequirement();
        $usrq->internalId = UserRequirement::withTrashed()->where('project_id', $request->project_id)->count() + 1;
        $usrq->source = $request->source;
        $usrq->cost = $request->cost;
        $usrq->stability = $request->stability;
        $usrq->priority = $request->priority;
        $usrq->status = $request->status;
        //$usrq->idUser = $request->idUser;
        //$usrq->idIncrement = $request->idIncrement;
        //$usrq->type = $request->type;
        $usrq->increment_id = $request->increment_id;
        $usrq->project_id = $request->project_id;
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
            //'internalId' => 'required',
            'stability' => 'required',
            'priority' => 'required',
            'status' => 'required',
            'project_id' => 'required',
            'description' => 'required',
            'increment_id' => 'required'
        ]);

        if ($validator->fails()) {
            return $validator->errors();
        }

        $usrq = UserRequirement::find($id);
        $usrq->source = $request->source;
        $usrq->cost = $request->cost;
        $usrq->stability = $request->stability;
        $usrq->priority = $request->priority;
        $usrq->status = $request->status;
        //$usrq->idUser = $request->idUser;
        $usrq->increment_id = $request->increment_id;
        //$usrq->type = $request->type;
        $usrq->project_id = $request->project_id;
        $usrq->description = $request->description;
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
