<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Survey;
use App\Models\Answer;

class SurveyController extends Controller
{
    function addSurv(Request $request){
        $add=new Survey;
        $add->name=$request->name;
        $add->save();
        return response()->json([
            "status" => "success",
            "survey" => $add
        ],200);

    }
    function getSurvById(Request $request){
        $result=Survey::where('id',$request->id)->get();
        return response()->json([
            "status" => "Success",
            "category" => $result,
        ],200);
    }

    function getAllSurv(Request $request){
        $result=Survey::all();
        return response()->json([
            "status" => "Success",
            "category" => $result,
        ],200);
    }
    function getSurvAns(Request $request){
        $result=Answer::where('surv_id',$request->sid)->get();
        return response()->json([
            "status" => "Success",
            "category" => $result,
        ],200);

    }
    function delSurvById(Request $request){
        Survey::where('id',$request->survid)->delete();
        return response()->json([
            "status" => "Success",
            
        ],200);
    }

}
