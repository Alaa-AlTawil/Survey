<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\QuestionController;
use App\Http\Controllers\AnswerController;
use App\Http\Controllers\SurveyController;

Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'
], function ($router) {
    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::post('/refresh', [AuthController::class, 'refresh']);
    Route::get('/user-profile', [AuthController::class, 'userProfile']);    
});

    Route::post('/addquesoption', [QuestionController::class, 'addQuesOption']);
    Route::post('/addquestype', [QuestionController::class, 'addQuesType']);
    Route::post('/addques', [QuestionController::class, 'addQues']);
    Route::post('/getquesofsurv', [QuestionController::class, 'getQuesOfSurv']);

    Route::post('/addanswer', [AnswerController::class, 'addAns']);
    Route::post('/getanswer',[AnswerController::class, 'getAns']);

    Route::post('/addsurvey', [SurveyController::class, 'addSurv']);
    Route::post('/getsurveybyid', [SurveyController::class, 'getSurvById']);
    Route::post('/delsurveybyid', [SurveyController::class, 'delSurvById']);
    Route::get('/getallsurveys', [SurveyController::class, 'getAllSurv']);
    Route::post('/getsurveyanswers', [SurveyController::class, 'getSurvAns']);