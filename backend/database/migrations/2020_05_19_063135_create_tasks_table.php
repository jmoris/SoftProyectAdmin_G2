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
            $table->string('user');
            $table->string('description');
            $table->string('state');
            $table->timestamp('initDate', 0)->nullable();
            $table->timestamp('deadLine', 0)->nullable();
            $table->timestamp('deliveryDate', 0)->nullable();
            $table->bigInteger('idProject');
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
