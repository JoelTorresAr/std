<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUnidadesOrganicasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('unidades_organicas', function (Blueprint $table) {
            $table->id();
            $table->string('nombre');
        });
        DB::table('unidades_organicas')->insert([
            ['nombre' => 'Municipalidad de San Jose de Lourdes'],
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('unidades_organicas');
    }
}
