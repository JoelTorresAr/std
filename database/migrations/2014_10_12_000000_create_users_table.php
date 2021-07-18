<?php

use App\User;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('apellido_paterno');
            $table->string('apellido_materno');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->boolean('estado')->default(true);
            $table->rememberToken();
            $table->timestamps();
        });
        $user = new User();
        $user->name              = 'admin';
        $user->apellido_paterno  = 'admin';
        $user->apellido_materno  = 'admin';
        $user->email             = 'admin@gmail.com';
        $user->password          = bcrypt('12345678');
        $user->save();
        $user = new User();
        $user->name              = 'mesa';
        $user->apellido_paterno  = 'partes';
        $user->apellido_materno  = 'partes';
        $user->email             = 'Mesapartes@gmail.com ';
        $user->password          = bcrypt('147852369');
        $user->save();
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
