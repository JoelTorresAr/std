<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTiposTramiteTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tipos_tramite', function (Blueprint $table) {
            $table->id();
            $table->string('nombre');
        });

        DB::table('tipos_tramite')->insert([
            ['nombre' => 'NORMAL'],
            ['nombre' => 'LIC. FUNCIONAMIENTO RIESGO MEDIO'],
            ['nombre' => 'LIC. FUNCIONAMIENTO BODEGAS'],
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tipos_tramite');
    }
}
