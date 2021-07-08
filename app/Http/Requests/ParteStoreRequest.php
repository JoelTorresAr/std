<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ParteStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public static function rulesStore()
    {
        return [
            'dni'                 => 'required|string',
            'nombres'             => 'required|string',
            'apellido_paterno'    => 'required|string',
            'apellido_materno'    => 'required|string',
            'correo'              => 'required|string',
            'correo_verificacion' => 'required|string',
            'telefono'            => 'required|string',
            'domicilio'           => 'required|string',
            'id_tipo_documento'   => 'required|string',
            'nro_documento'       => 'required|string',
            'nro_folios'          => 'required|string',
            'asunto'              => 'required|string',
            'tipo_tramite'        => 'required|string',
            'file'                => 'required'
        ];
    }
}
