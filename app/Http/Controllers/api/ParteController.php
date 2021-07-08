<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Requests\ParteStoreRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ParteController extends Controller
{
    public function store(Request $request)
    {
        $array = $request->all();
        $keys = array_keys($array);
        foreach ($keys as $key) {
            if ($array[$key] == "null") {
                $array[$key] = null;
            }
        }
        $array['file'] = $request->file('file');
        $newRequest = new Request($array);
        $this->validate($newRequest, ParteStoreRequest::rulesStore(), [], []);
        foreach ($request->file('file') as $key => $file) {
            Storage::putFileAs('documentos',  $file, 'prueba');
        }

    }
}
