<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEstadosParteTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('estados_parte', function (Blueprint $table) {
            $table->id();
            $table->string('nombre');
        });
        DB::table('estados_parte')->insert([
            ['nombre' => 'REGISTRADO'],
            ['nombre' => 'TRAMITE'],
            ['nombre' => 'ATENDIDO'],
            ['nombre' => 'OBSERVADO'],
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('estados_parte');
    }
}
