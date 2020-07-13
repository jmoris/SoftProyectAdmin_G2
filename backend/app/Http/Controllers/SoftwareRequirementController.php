<?php

namespace App\Http\Controllers;

use App\SoftwareRequirement;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class SoftwareRequirementController extends Controller
{
        /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $ur = SoftwareRequirement::where('project_id', $request->project_id)->get();
        return response()->json($ur);
    }

    public function getNextId($id){
        $next_id = SoftwareRequirement::where('project_id', $id)->orderBy('internalId', 'desc')->first();
        if($next_id==null)
            return response()->json(['next_id' => 1]);
        return response()->json(['next_id' => $next_id->internalId+1]);
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
            'stability' => 'required',
            'priority' => 'required',
            'status' => 'required',
            'project_id' => 'required',
            'description' => 'required',
            'user_requirement_id' => 'required'
        ]);

        if ($validator->fails()) {
            return $validator->errors();
        }

        $usrq = new SoftwareRequirement();
        $usrq->internalId = SoftwareRequirement::where('project_id', $request->project_id)->count() + 1;
        $usrq->cost = $request->cost;
        $usrq->stability = $request->stability;
        $usrq->priority = $request->priority;
        $usrq->status = $request->status;
        $usrq->user_requirement_id = $request->user_requirement_id;
        $usrq->project_id = $request->project_id;
        $usrq->description = $request->description;
        $usrq->save();

        return response()->json([
            'success' => true,
            'msg' => 'El requisito de software fue agregado exitosamente.'
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
        $ur = SoftwareRequirement::find($id);
        if($ur){
            return response()->json($ur);
        }else{
            return response()->json([
                'success' => false,
                'msg' => 'El requisito de software no existe en la base de datos.'
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
            'stability' => 'required',
            'priority' => 'required',
            'status' => 'required',
            'project_id' => 'required',
            'description' => 'required',
            'user_requirement_id' => 'required'
        ]);

        if ($validator->fails()) {
            return $validator->errors();
        }

        $usrq = SoftwareRequirement::find($id);
        $usrq->internalId = $request->code;
        $usrq->cost = $request->cost;
        $usrq->stability = $request->stability;
        $usrq->priority = $request->priority;
        $usrq->status = $request->status;
        $usrq->user_requirement_id = $request->user_requirement_id;
        $usrq->project_id = $request->project_id;
        $usrq->description = $request->description;
        $usrq->save();

        return response()->json([
            'success' => true,
            'msg' => 'El requisito de software fue actualizado exitosamente.'
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
        $usrq = SoftwareRequirement::find($id);
        if($usrq){
            $usrq->delete();
            return response()->json([
                'success' => true,
                'msg' => 'Requisito de software eliminado correctamente.'
            ]);
        }
        return response()->json([
            'success' => false,
            'msg' => 'No se puede eliminar el requisitos de ususario.'
        ]);
    }
}
