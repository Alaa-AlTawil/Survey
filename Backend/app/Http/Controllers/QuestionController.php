<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Question_option;

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
}
