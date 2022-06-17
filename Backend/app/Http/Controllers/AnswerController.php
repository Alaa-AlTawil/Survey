<?php

namespace App\Http\Controllers;
use App\Models\Answer;
use Illuminate\Http\Request;

class AnswerController extends Controller
{
    function addAns(Request $request){
        $add=new Answer;
        $add->answer=$request->answer;
        $add->user_id=$request->uid;
        $add->ques_id=$request->qid;
        $add->surv_id=$request->sid;
        $add->save();
        return response()->json([
            "status" => "success"],200);
    }
    function getAns(Request $request){
        $result=Answer::where('ques_id',$request->qid)->get();
        return response()->json([
            "status" => "Success",
            "category" => $result,
        ],200);
    }
}
