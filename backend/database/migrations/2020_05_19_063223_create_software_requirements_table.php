<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSoftwareRequirementsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('software_requirements', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('internalId');
            $table->integer('priority');
            $table->integer('stability');
            $table->integer('status');
            $table->integer('cost');
            $table->text('description');
            $table->bigInteger('user_requirement_id')->unsigned();
            $table->bigInteger('project_id')->unsigned();
            $table->timestamps();

            $table->foreign('user_requirement_id')->references('id')->on('user_requirements');
            $table->foreign('project_id')->references('id')->on('projects');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('software_requirements');
    }
}
