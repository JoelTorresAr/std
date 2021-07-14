<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Parte extends Model
{
    protected $table  = 'partes';

    public $timestamps = false;

    /**
     * Atributos que son asignables en masa.
     *
     * @var array
     */
    protected $fillable = [
        'id_tipo_documento',
        'nro_documento',
        'nro_folios',
        'asunto',
        'id_tipo_tramite',
        'files_path',
        'fecha_reg',
    ];
}
