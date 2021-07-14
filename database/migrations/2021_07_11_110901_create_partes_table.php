<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePartesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('partes', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_tipo_documento');
            $table->unsignedBigInteger('id_solicitante');
            $table->integer('nro_documento');
            $table->integer('nro_folios');
            $table->text('asunto');
            $table->unsignedBigInteger('id_tipo_tramite');
            $table->string('files_path');
            $table->dateTime('fecha_reg', 0)->useCurrent();

            $table->foreign('id_tipo_documento')->references('id')->on('tipos_documento');
            $table->foreign('id_tipo_tramite')->references('id')->on('tipos_tramite');
            $table->foreign('id_solicitante')->references('id')->on('solicitantes');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('partes');
    }
}