<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Requests\ParteStoreRequest;
use App\Models\Parte;
use App\Models\Solicitante;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;
use ZipArchive;
use Zip;

class ParteController extends Controller
{
    const nElementosPagina = 10;
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

        $data = Parte::select(
            'partes.*',
            'partes.id as id_parte',
            'td.nombre as tipo_doc',
            'tt.nombre as  tipo_tram',
            'est.nombre as  estado',
            'sol.*',
        )
            ->join('tipos_documento AS td', 'partes.id_tipo_documento', 'td.id')
            ->join('tipos_tramite   AS tt', 'partes.id_tipo_tramite', 'tt.id')
            ->join('solicitantes    AS sol', 'partes.id_solicitante', 'sol.id')
            ->join('estados_parte   AS est', 'partes.id_estado', 'est.id')
            ->whereRaw($whereRaw)
            ->orderByRaw("partes.fecha_reg DESC")
            ->paginate($pageSize);
        return ['status' => 200, 'resultado' => $data];
    }
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
        $path = 'documentos/natural/' . $request->id_tipo_tramite . "/" . $request->id_tipo_documento . "/" . $request->dni . "/" . time();
        foreach ($request->file('file') as $key => $file) {
            $numero = $key + 1;
            $name = 'documento N° ' . $request->nro_documento . " - $numero" . '.pdf';
            Storage::putFileAs($path,  $file, $file->getClientOriginalName());
        }
        $solicitante = null;
        if (!$solicitante = Solicitante::where([['nro_documento', '=', $request->dni]])->first()) {
            $solicitante = new Solicitante();
            $solicitante->nro_documento      = $request->dni;
            $solicitante->nombres            = $request->nombres;
            $solicitante->apellido_paterno   = $request->apellido_paterno;
            $solicitante->apellido_materno   = $request->apellido_materno;
            $solicitante->correo             = $request->correo;
            $solicitante->telefono           = $request->telefono;
            $solicitante->domicilio          = $request->domicilio;
            $solicitante->save();
        }
        $parte    = new Parte();
        $parte->id_tipo_documento        = $request->id_tipo_documento;
        $parte->nro_documento            = $request->nro_documento;
        $parte->nro_folios               = $request->nro_folios;
        $parte->asunto                   = $request->asunto;
        $parte->id_solicitante           = $solicitante->id;
        $parte->id_tipo_tramite          = $request->id_tipo_tramite;
        $parte->files_path               = "app/" . $path;
        $parte->fecha_reg                = Carbon::now()->toDateTimeString();
        $parte->save();
        return ['state' => 200, 'message' => 'registrado con exito'];
    }
    public function downloadDocumentos(Parte $parte)
    {
        $zip_name = time() . ".zip"; // Zip name
        $zip = Zip::create($zip_name);
        $path = storage_path($parte->files_path);
        $zip->add($path, true);
        $zip->close();
        return response()->download(public_path($zip_name))->deleteFileAfterSend();
    }
}
