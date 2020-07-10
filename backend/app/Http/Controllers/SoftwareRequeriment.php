<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SoftwareRequeriment extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
            'srInputCode'   => 'required',
            'srPriority'    => 'required',
            'srStability'   => 'required',
            'srState'       => 'required',
            'srCost'        => 'required',
            'srDescription' => 'required',
            'userRequerimentReference'  => 'required'
        ]);

        if ($validator->fails()) {
            return $validator->errors();
        }

        $sofReq = new SoftwareRequirement();
        $sofReq->priority = $request->srPriority;
        $sofReq->stability = $request->srStability;
        $sofReq->state = $request->srState;
        $sofReq->cost = $request->srCost;
        $sofReq->description = $request->srDescription;
        $sofReq->idSoftwareRequerements = $request->srInputCode;
        $sofReq->save();

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
        $sr = SoftwareRequirement::find($id);
        if($sr){
            return response()->json($sr);
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
        //
        $validator = Validator::make($request->all(), [
            'srInputCode'   => 'required',
            'srPriority'    => 'required',
            'srStability'   => 'required',
            'srState'       => 'required',
            'srCost'        => 'required',
            'srDescription' => 'required',
            'userRequerimentReference'  => 'required'
        ]);

        if ($validator->fails()) {
            return $validator->errors();
        }

        $sofReq = SoftwareRequeriment::find($id);
        $sofReq->priority = $request->srPriority;
        $sofReq->stability = $request->srStability;
        $sofReq->state = $request->srState;
        $sofReq->cost = $request->srCost;
        $sofReq->description = $request->srDescription;
        $sofReq->idSoftwareRequerements = $request->srInputCode;
        $sofReq->save();

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
        //
        $sofReq = UserRequirement::find($id);
        if($sofReq){
            $sofReq->delete();
            return response()->json([
                'success' => true,
                'msg' => 'Requisito de software eliminado correctamente.'
            ]);
        }
        return response()->json([
            'success' => false,
            'msg' => 'No se puede eliminar el requisitos de software.'
        ]);
    }
}
