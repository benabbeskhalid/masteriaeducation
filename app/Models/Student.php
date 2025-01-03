<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    use HasFactory;

    // Spécifier les champs pouvant être remplis (mass assignment)
    protected $fillable = ['name', 'email', 'matricule', 'phone'];

}
