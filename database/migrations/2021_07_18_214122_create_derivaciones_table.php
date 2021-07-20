<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDerivacionesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('derivaciones', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_parte');
            $table->unsignedBigInteger('id_estado_parte');
            $table->unsignedBigInteger('id_area');
            $table->dateTime('fecha_reg', 0)->useCurrent();
            $table->text('respuesta')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('derivaciones');
    }
}
