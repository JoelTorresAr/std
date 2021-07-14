<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Requests\ParteStoreRequest;
use App\Models\Parte;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ParteController extends Controller
{
    public function storeNatural(Request $request)
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
        $date = Carbon::now();
        $path = 'documentos/natural/' . $request->id_tipo_tramite . "/" . $request->id_tipo_documento . "/" . $request->dni . "/" . $date->toDateString();
        foreach ($request->file('file') as $key => $file) {
            $numero = $key + 1;
            $name = 'documento N° ' . $request->nro_documento . " - $numero" . '.pdf';
            Storage::putFileAs($path,  $file, $name);
        }
        $parte = new Parte();
        $parte->id_tipo_documento = $request->id_tipo_documento;
        $parte->nro_documento     = $request->nro_documento;
        $parte->nro_folios        = $request->nro_folios;
        $parte->asunto            = $request->asunto;
        $parte->id_tipo_tramite   = $request->id_tipo_tramite;
        $parte->files_path        = $path;
        $parte->fecha_reg         = Carbon::now()->toDateTimeString();
        $parte->save();
        return ['state' => 200, 'message' => 'registrado con exito'];
    }
}
