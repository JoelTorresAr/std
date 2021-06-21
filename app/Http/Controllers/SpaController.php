<?php

namespace App\Http\Controllers;

class SpaController extends Controller
{
    /**
     * Crea una nueva instancia del controlador
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Muestra la aplicacion spa
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index(){
        return view('spa');
    }
}
