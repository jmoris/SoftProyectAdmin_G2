<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Course extends Model
{
    use SoftDeletes;

    public function users(){
        return $this->belongsToMany(User::class);
    }

    public function user(){
        return $this->hasOne(User::class, 'id', 'idUser');
    }

    public function projects(){
        return $this->hasMany(Project::class);
    }
}
