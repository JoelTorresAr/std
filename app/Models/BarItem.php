<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BarItem extends Model
{
    protected $table  = 'bar_items';
    public $timestamps = false;

    public function bargroup()
    {
        return $this->hasOne('App\Models\BarGroup','id_bar_grupo','id');
    }
}
