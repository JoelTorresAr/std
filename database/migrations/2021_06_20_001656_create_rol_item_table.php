<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
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
        });
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
