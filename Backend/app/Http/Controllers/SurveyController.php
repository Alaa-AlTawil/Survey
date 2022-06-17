<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Survey;

class SurveyController extends Controller
{
    function addSurv(Request $request){
        $add=new Survey;
        $add->name=$request->name;
        $add->save();
        return response()->json([
            "status" => "success"],200);

    }
    function getSurvById(Request $request){
        $result=Survey::where('id',$request->id)->get();
        return response()->json([
            "status" => "Success",
            "category" => $result,
        ],200);
    }
}
