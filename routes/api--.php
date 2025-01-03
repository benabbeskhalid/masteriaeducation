<?php

use App\Http\Controllers\StudentController;
use App\Models\Student;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');

// Route::apiResource('students', StudentController::class);


// Récupérer tous les étudiants
Route::get('students', function() {
    return Student::all();
});

// Ajouter un étudiant
Route::post('students', function(Request $request) {
    return Student::create($request->all());
});

// Modifier un étudiant
Route::put('students/{id}', function(Request $request, $id) {
    $student = Student::findOrFail($id);
    $student->update($request->all());
    return $student;
});

// Supprimer un étudiant
Route::delete('students/{id}', function($id) {
    $student = Student::findOrFail($id);
    $student->delete();
    return response()->json(['message' => 'Deleted successfully']);
});