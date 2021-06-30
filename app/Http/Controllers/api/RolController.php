<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Rol;
use Illuminate\Http\Request;

class RolController extends Controller
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

        $data = Rol::whereRaw($whereRaw)
            ->orderByRaw("nombre DESC")
            ->paginate($pageSize);
        return ['status' => 200, 'resultado' => $data];
    }
    public function store(Request $request)
    {
        $rules = [
            'nombre'                 => ['required', 'unique:roles,nombre'],
        ];
        $this->validate($request, $rules, [], []);
        $user = new Rol();
        $user->nombre  = $request->nombre;
        $user->save();

        return ['status' => 200, 'message' => 'Operación realizada con exito'];
    }
}
