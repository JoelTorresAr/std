<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Http\Request;

class UsuarioController extends Controller
{
    const nElementosPagina = 9;
    public function index(Request $request)
    {
        $pageSize = $request->pagesize ?? self::nElementosPagina;
        $search = (object) $request->all();
        $tipo = $search->tipo;
        $param = $search->param;
        $whereRaw = "1 = 1";

        if (strlen($param) > 0) {
            $whereRaw = " $tipo = '$param'";
        }

        $data = User::whereRaw($whereRaw)
            ->orderByRaw("apellido_paterno DESC, apellido_materno DESC, name DESC")
            ->paginate($pageSize);
        return ['status' => 200, 'resultado' => $data];
    }
    public function store(Request $request)
    {
        $rules = [
            'email'                  => ['required', 'email', 'unique:users,email'],
            'name'                   => ['required'],
            'apellido_paterno'       => ['required'],
            'apellido_materno'       => ['required'],
            'password'               => ['required','min:8'],
            'password_confirmation'  => ['required','min:8','same:password'],
        ];
        $this->validate($request, $rules, ['password_confirmation.same' => 'La contraseña de confirmacion no coincide'], []);
        $user = new User();
        $user->name             = $request->name;
        $user->apellido_paterno = $request->apellido_paterno;
        $user->apellido_materno = $request->apellido_materno;
        $user->email            = $request->email;
        $user->password         = bcrypt($request->password);
        $user->save();

        return ['status' => 200, 'message' => 'Operación realizada con exito'];
    }
}
