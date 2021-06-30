<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class CreateBarItemsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bar_items', function (Blueprint $table) {
            $table->id();
            $table->string('texto');
            $table->string('clave');
            $table->unsignedBigInteger('id_bar_grupo');
            $table->foreign('id_bar_grupo')->references('id')->on('bar_grupos');
        });

        $bars = [
            ['texto' => 'Mantenimiento',          'clave' => 'MNTN'],
            ['texto' => 'Expediente',             'clave' => 'EXPE']
        ];
        $items = [
            ['texto' => 'Usuarios',   'clave' => 'MNTN_USU',  'id_bar_grupo' => 1],
            ['texto' => 'Roles',      'clave' => 'MNTN_ROL',  'id_bar_grupo' => 1],
            ['texto' => 'Expediente', 'clave' => 'EXPE_EXPE', 'id_bar_grupo' => 2],
            ['texto' => 'Reportes',   'clave' => 'EXPE_REPT', 'id_bar_grupo' => 2],
            ['texto' => 'Control',    'clave' => 'EXPE_CTRL', 'id_bar_grupo' => 2]
        ];
        DB::table('bar_grupos')->insert($bars);
        DB::table('bar_items')->insert($items);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('bar_items');
    }
}
