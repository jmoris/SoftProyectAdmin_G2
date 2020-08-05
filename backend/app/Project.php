<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Project extends Model
{
    use SoftDeletes;
    public function user_roles(){
        return $this->belongsToMany(RoleUser::class);
    }

    public function course(){
        return $this->hasOne(Course::class, 'id', 'course_id');
    }
}
