<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class RoleUser extends Model
{
    public function projects(){
        return $this->belongsToMany(Project::class);
    }

    public function user(){
        return $this->hasOne(User::class, 'id', 'user_id');
    }

    public function role(){
        return $this->hasOne(Role::class, 'id', 'role_id');
    }
}
