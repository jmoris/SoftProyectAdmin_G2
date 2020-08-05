import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserRequirementService } from 'src/app/_services/userrequirements.service';
import { IncrementService } from 'src/app/_services/increments.service';

import * as DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';


@Component({
  selector: 'documents-component',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent implements OnInit {

  public Editor = DecoupledEditor;


  selectDocument;
  documents: any = [];
  d_requeriments: any = [];
  d_desing: any = [];
  d_implementation:any = [];
  d_testing: any = [];
  d_historical:any = [];
  show_data_document:any = [];

 
  constructor
  (
  ) 
   {
    //Creamos el array con todos los documentos
    this.documents = ["Documento de requisitos","Documento de Diseño","Documento de Implementación","Documento de Pruebas","Documento Histórico"];

    //Sub items del documento de requerimientos
    this.d_requeriments = [
      "1.   Introducción",
      "1.1  Proposito del Sistema",
      "1.2  Alcance del Proyecto",
      "1.3  Contexto",
      "1.4  Referencias",
      "2.   Descripcion General",
      "2.1  Suposiciones y Dependencias",
      "2.2  Restricciones Generales",
      "3.   Requisitos de Usuario",
      "4.   Planificacion"
    ];
    //Sub items del documentos de diseño
    this.d_desing = [
      "1.   Introducción",
      "1.1  Proposito del Sistema",
      "1.2  Alcance del proyecto",
      "1.3  Contexto",
      "1.4  Referencias",
      "2.   Diseño Arquitectonico",
      "2.2  Arquitectura Logica",
      "2.3  Modelo de Datos",
      "3.   Diseño Detallado",
      "3.1  Diseño de Diagrama de Clases",
      "3.2  Diseño de Intergaz de Usuario"
    ];
    //Sub items del documento de implementacion
    this.d_implementation = [
      "1.   Introduccion",
      "1.2  Alcance del Proyecto",
      "1.3  Contexto",
      "1.4  Referencias",
      "2.   Implementacion del Proyecto",
      "2.1  Interfaces generales de modulos implementadas",
      "2.2  Interfaces de principales funcionalidades implementadas",
      "3.   Manual de instalacion de Software",
      "3.1  Requerimientos Tecnicos",
      "3.2  Instalacion paso a paso"
    ];
    //Sub items del documento de pruebas
    this.d_testing = [
      "1.   Introduccion",
      "1.1  Alcance del Sistema",
      "1.2  Alcance del Proyecto",
      "1.3  Contexto",
      "1.4  Referencias",
      "2    Casos de Prueba",
      "3    Matriz de Trazado",
      "3.1  Requisitos de Usuario / Casos de prueba",
      "3.2  Requisitos de Sistema / Casos de prueba"
    ];
    //Sub items de documentos historico
    this.d_historical = [
      "1.   Introducción",
      "1.1  Proposito",
      "1.2  Alcance",
      "1.3  Contexto",
      "1.4  Definiciones",
      "1.5  Referencias",
      "2.   Descripcion General",
      "2.1  Usuarios",
      "2.2  Productos",
      "2.3  Ambiente",
      "2.4  Proyectos Relacionados",
      "3.   Diseño",
      "3.1  Arquitectura Fisica",
      "3.2  Arquitectura Logica",
      "3.3  Modelo de Datos",
      "3.4  Detalle de Modulos",
      "3.5  Navegacion",
      "3.6  Interfaz",
      "4.   Requisitos del Sistema",
      "4.1  Requisitos de Usuario",
      "4.2  Requisitos de Software",
      "5.   Modulos",
      "6.   Casos de Prueba",
      "7.   Matrices de Trazado (RU/RS) (MD/RS) (RU/CP) (RS/CP)"
    ];
    //Seteamos el show_data_document para documento de requisitos
    this.show_data_document = this.d_requeriments;
    this.selectDocument = 'asdsd';


  }

  /**
   * 
   * @param e Cambiamos la seccion del documento
   */
  changed(e){
    if(e.localeCompare("Documento de requisitos")==0)
    {
      this.show_data_document = this.d_requeriments;
    }
    if(e.localeCompare("Documento de Diseño")==0)
    {
      this.show_data_document = this.d_desing;
    }
    if(e.localeCompare("Documento de Implementación")==0)
    {
      this.show_data_document = this.d_implementation;
    }
    if(e.localeCompare("Documento de Pruebas")==0)
    {
      this.show_data_document = this.d_testing;
    }
    if(e.localeCompare("Documento Histórico")==0)
    {
      this.show_data_document = this.d_historical;
    }

}

public onReady( editor ) {
  editor.ui.getEditableElement().parentElement.insertBefore(
      editor.ui.view.toolbar.element,
      editor.ui.getEditableElement()
  );
}

ngOnInit(): void {

}




}
