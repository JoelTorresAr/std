<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BarGroup extends Model
{
    protected $table  = 'bar_grupos';
    public $timestamps = false;

    public function baritems()
    {
        return $this->hasMany('App\Models\BarItem', 'id_bar_grupo', 'id');
    }
}
