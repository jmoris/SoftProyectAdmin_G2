<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTasksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tasks', function (Blueprint $table) {
            $table->bigIncrements('id');
<<<<<<< Updated upstream
=======
            $table->string('user');
            $table->string('description');
            $table->string('state');
            $table->timestamp('initDate');
            $table->timestamp('deadLine');
            $table->timestamp('deliveryDate');
            $table->bigInteger('idProject');
            $table->foreign('idProject')->references('id')->on('projects');
>>>>>>> Stashed changes
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tasks');
    }
}
