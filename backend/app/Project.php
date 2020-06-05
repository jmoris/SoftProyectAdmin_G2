<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    public function user_roles(){
        return $this->belongsToMany(RoleUser::class);
    }
}
