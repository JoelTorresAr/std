<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class CreateTiposDocumentoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tipos_documento', function (Blueprint $table) {
            $table->id();
            $table->string('nombre');
        });
        DB::table('tipos_documento')->insert([
            ['nombre' => 'CARTA'],
            ['nombre' => 'OFICIO'],
            ['nombre' => 'MEMORANDO'],
            ['nombre' => 'INFORME'],
            ['nombre' => 'INVITACIÓN'],
            ['nombre' => 'FACTURA'],
            ['nombre' => 'GUIAS DE REMISIÓN'],
            ['nombre' => 'SOLICITUD'],
            ['nombre' => 'CITACIÓN'],
            ['nombre' => 'OTROS'],
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tipos_documento');
    }
}
