<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDocumentSectionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('document_sections', function (Blueprint $table) {
            $table->bigIncrements('id');
<<<<<<< Updated upstream
=======
            $table->string('sectionType');
            $table->string('content');
            $table->timestamp('date');
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
        Schema::dropIfExists('document_sections');
    }
}
