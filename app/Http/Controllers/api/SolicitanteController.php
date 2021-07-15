<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SolicitanteController extends Controller
{
    public function search(Request $request)
    {
        $dni = $request->dni;
        $solicitante = DB::table('solicitantes')->where('nro_documento', '=', $dni)->first();
        return ['status' => 200, 'resultado' => $solicitante];
    }
}
