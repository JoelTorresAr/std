<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class MesaPartesController extends Controller
{
    public function index()
    {
        return view('mesaPartes.index');
    }
    public function personaNatural()
    {
        $tipos_documento = DB::table('tipos_documento')->select('id', 'nombre')->get();
        $tipos_documento = $tipos_documento->toArray();
        $tipos_tramite = DB::table('tipos_tramite')->select('id', 'nombre')->get();
        $tipos_tramite = $tipos_tramite->toArray();
        return view('mesaPartes.personaNatural', compact('tipos_documento', 'tipos_tramite'));
    }
    public function personaJuridica()
    {
        return view('mesaPartes.personaJuridica');
    }
}
