<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSolicitantesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('solicitantes', function (Blueprint $table) {
            $table->id();
            $table->enum('tipo_persona', ['NATURAL', 'JURIDICA'])->default('NATURAL');
            $table->string('nro_documento')->unique();
            $table->string('razon_social')->nullable();
            $table->string('nro_doc_representante_legal')->nullable();
            $table->string('nombres');
            $table->string('apellido_paterno');
            $table->string('apellido_materno');
            $table->string('correo');
            $table->string('telefono');
            $table->string('domicilio');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('solicitantes');
    }
}
