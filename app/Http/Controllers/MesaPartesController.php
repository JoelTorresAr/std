<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MesaPartesController extends Controller
{
    public function index()
    {
        return view('mesaPartes');
    }
    public function personaNatural()
    {
        return view('mesaPartes');
    }
    public function personaJuridica()
    {
        return view('mesaPartes');
    }
}
