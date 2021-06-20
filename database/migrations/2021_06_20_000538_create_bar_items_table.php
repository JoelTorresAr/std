<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
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
