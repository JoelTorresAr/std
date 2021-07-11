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
            $table->integer('nro_documento');
            $table->integer('nro_folios');
            $table->text('asunto');
            $table->unsignedBigInteger('id_tipo_tramite');
            $table->string('files_path');

            $table->foreign('id_tipo_documento')->references('id')->on('tipos_documento');
            $table->foreign('id_tipo_documento')->references('id')->on('tipos_documento');
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
