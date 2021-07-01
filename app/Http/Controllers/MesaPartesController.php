<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MesaPartesController extends Controller
{
    public function index()
    {
        return view('mesaPartes.index');
    }
    public function personaNatural()
    {
        return view('mesaPartes.personaNatural');
    }
    public function personaJuridica()
    {
        return view('mesaPartes.personaJuridica');
    }
}
