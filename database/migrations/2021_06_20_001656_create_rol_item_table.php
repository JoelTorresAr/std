<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class CreateRolItemTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('rol_item', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_item');
            $table->unsignedBigInteger('id_rol');
            $table->boolean('agregar');
            $table->boolean('modificar');
            $table->boolean('eliminar');
            $table->boolean('consultar');

            $table->foreign('id_item')->references('id')->on('bar_items');
            $table->foreign('id_rol')->references('id')->on('roles');
        });

        $rol_items = [
            ['id_rol' => 1, 'id_item' => 1, 'agregar' => true, 'modificar' => true, 'eliminar' => true, 'consultar' => true],
            ['id_rol' => 1, 'id_item' => 2, 'agregar' => true, 'modificar' => true, 'eliminar' => true, 'consultar' => true],
            ['id_rol' => 1, 'id_item' => 3, 'agregar' => true, 'modificar' => true, 'eliminar' => true, 'consultar' => true],
            ['id_rol' => 1, 'id_item' => 4, 'agregar' => true, 'modificar' => true, 'eliminar' => true, 'consultar' => true],
            ['id_rol' => 1, 'id_item' => 5, 'agregar' => true, 'modificar' => true, 'eliminar' => true, 'consultar' => true],
        ];
        DB::table('rol_item')->insert($rol_items);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('rol_item');
    }
}
