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
            'correo'              => 'required|email|confirmed',
            'correo_confirmation' => 'required|email',
            'telefono'            => 'required|string',
            'domicilio'           => 'required|string',
            'id_tipo_documento'   => 'required|string',
            'nro_documento'       => 'nullable',
            'nro_folios'          => 'required|string',
            'asunto'              => 'required|string',
            'id_tipo_tramite'     => 'required|string',
            'file'                => 'required'
        ];
    }
}
