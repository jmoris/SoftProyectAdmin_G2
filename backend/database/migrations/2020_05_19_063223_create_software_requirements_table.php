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
            $table->timestamps();
            $table->text('cost');
            $table->text('priority');
            $table->integer('idSoftwareRequerements');
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
