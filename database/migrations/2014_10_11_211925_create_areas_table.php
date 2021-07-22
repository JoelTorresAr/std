<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAreasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('areas', function (Blueprint $table) {
            $table->id();
            $table->string('nombre');
            $table->unsignedBigInteger('id_unidad_organica');

            $table->foreign('id_unidad_organica')->references('id')->on('unidades_organicas');
        });
        DB::table('areas')->insert([
            ['nombre' => 'Area 1', 'id_unidad_organica' => 1],
            ['nombre' => 'Area 2', 'id_unidad_organica' => 1],
            ['nombre' => 'Area 3', 'id_unidad_organica' => 1],
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        DB::table('areas')->delete();
        Schema::dropIfExists('areas');
    }
}
