<?php

namespace App\Http\Controllers;

use App\TestCase;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class TestCaseController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $ur = TestCase::where('project_id', $request->project_id)->get();
        return response()->json($ur);
    }

    public function getNextId($id){
        $next_id = TestCase::where('project_id', $id)->orderBy('internalId', 'desc')->first();
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
            'description' => 'required',
            'acceptableResult' => 'required',
            'optimumResult' => 'required',
            'status' => 'required',
            'project_id' => 'required',
        ]);

        if ($validator->fails()) {
            return $validator->errors();
        }

        $testc = new TestCase();
        $testc->internalId = TestCase::where('project_id', $request->project_id)->count() + 1;
        $testc->description = $request->description;
        $testc->acceptableResult = $request->acceptableResult;
        $testc->optimumResult = $request->optimumResult;
        $testc->status = $request->status;
        $testc->project_id = $request->project_id;
        $testc->save();

        return response()->json([
            'success' => true,
            'msg' => 'El caso de uso fue agregado exitosamente.'
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
        $tc = TestCase::find($id);
        if($tc){
            return response()->json($tc);
        }else{
            return response()->json([
                'success' => false,
                'msg' => 'El caso de uso no existe en la base de datos.'
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
            'description' => 'required',
            'acceptableResult' => 'required',
            'optimumResult' => 'required',
            'status' => 'required',
            'project_id' => 'required',
        ]);

        if ($validator->fails()) {
            return $validator->errors();
        }

        $testc = TestCase::find($id);
        $testc->internalId = TestCase::where('project_id', $request->project_id)->count() + 1;
        $testc->description = $request->description;
        $testc->acceptableResult = $request->acceptableResult;
        $testc->optimumResult = $request->optimumResult;
        $testc->status = $request->status;
        $testc->project_id = $request->project_id;
        $testc->save();

        return response()->json([
            'success' => true,
            'msg' => 'El caso de uso fue modificadp exitosamente.'
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
        $tc = TestCase::find($id);
        if($tc){
            $tc->delete();
            return response()->json([
                'success' => true,
                'msg' => 'Caso de uso eliminado correctamente.'
            ]);
        }
        return response()->json([
            'success' => false,
            'msg' => 'No se puede eliminar el caso de uso.'
        ]);
    }
}
