<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserRequirementsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_requirements', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->timestamps();
            $table->text('source');
            $table->integer('cost');
            $table->text('stability');
            $table->text('priority');
            $table->text('state');
            $table->integer('idUserType');
            $table->text('idIncrement');
            $table->text('type');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('user_requirements');
    }
}
