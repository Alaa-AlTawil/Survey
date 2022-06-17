<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Question_option;
use App\Models\Question_type;
use App\Models\Question;

class QuestionController extends Controller
{
    function addQuesOption(Request $request){
        $Quesopt=new Question_option;
        $Quesopt->option=$request->option;
        $Quesopt->ques_id=$request->questionid;
        $Quesopt->save();
        return response()->json([
            "status" => "success"],200);
    }

    function addQuesType(Request $request){
        $type=new Question_type;
        $type->type=$request->type;
        $type->ques_id=$request->questionid;
        $type->save();
        return response()->json([
            "status" => "success"],200);

    }
    function addQues(Request $request){
        $ques=new Question;
        $ques->content=$request->content;
        $ques->ques_option_id=$request->qoid;
        $ques->ques_type_id=$request->qtid;
        $ques->surv_id=$request->sid;
        $ques->save();
        return response()->json([
            "status" => "success"],200);

    }
    function getQuesOfSurv(Request $request){
        $result=Question::where('surv_id',$request->sid)->get();
        return response()->json([
            "status" => "Success",
            "category" => $result,
        ],200);
    }
}
