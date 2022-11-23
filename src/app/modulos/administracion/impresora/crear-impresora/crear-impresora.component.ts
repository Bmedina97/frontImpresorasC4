import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ImpresoraModel } from 'src/app/models/ImpresoraModelo';
import { ImpresoraService } from 'src/app/service/impresora.service';

@Component({
  selector: 'app-crear-impresora',
  templateUrl: './crear-impresora.component.html',
  styleUrls: ['./crear-impresora.component.scss']
})
export class CrearImpresoraComponent {
  public formCreatePrinter: FormGroup;
  titulo = 'Registro de impresora';
  impresora : ImpresoraModel;

  constructor(
    private fb : FormBuilder, 
    private router : Router , 
    private impresoraService : ImpresoraService
    ) 

    { 
      this.formCreatePrinter = fb.group({
        placa: ['', [Validators.required, Validators.email, Validators.minLength(3), Validators.maxLength(100) ] ],
        modelo: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(50)] ],
        marca: ['', [Validators.required, Validators.email, Validators.minLength(6), Validators.maxLength(100) ] ],
        tipoImpresora: ['', [Validators.required]],
        velocidadImpresion: ['', [Validators.required, Validators.email, Validators.minLength(6), Validators.maxLength(100) ] ],
        volumenLargo: ['', [Validators.required, Validators.email, Validators.minLength(2), Validators.maxLength(3) ] ],
        volumenAlto: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(3)] ],
        volumenProfundo: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(3)] ],
        caracterizticas: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(100)] ],
        seguroRobo: ['', [Validators.required]],
        seguroContractual: ['', [Validators.required]],
        
        });
    }

    registrar(){
   

      let impresora = new ImpresoraModel();
      //console.log(new Date(2015

     
      impresora.placa = this.formCreatePrinter.controls["placa"].value;
      impresora.modelo = this.formCreatePrinter.controls["modelo"].value;
      impresora.marca = this.formCreatePrinter.controls["marca"].value;
      impresora.tipoImpresora = this.formCreatePrinter.controls["tipoImpresora"].value.toString();
      impresora.velocidadImpresion = this.formCreatePrinter.controls["velocidadImpresion"].value;
      impresora.volumenLargo = parseInt(this.formCreatePrinter.controls["volumenLargo"].value);
      impresora.volumenAlto = parseInt(this.formCreatePrinter.controls["volumenAlto"].value);
      impresora.volumenProfundo = parseInt(this.formCreatePrinter.controls["volumenProfundo"].value);
      impresora.caracterizticas = this.formCreatePrinter.controls["caracterizticas"].value;
      
      impresora.seguroRobo =  new Date();// this.formCreatePrinter.controls["seguroRobo"].value.toString;
      impresora.seguroContractual = new Date();//this.formCreatePrinter.controls["seguroContractual"].value;

      console.log(impresora);
  
      this.impresoraService.crearimpresora(impresora).subscribe( response =>{
         console.log(response);
         alert("Se inserto el impresora");      
         this.limpiarFormulario();
         this.router.navigate(['impresora/buscar-impresora']);
        }, error => {
          alert("No se logro insertar el impresora");
        })    
    }
  
    limpiarFormulario(){
      this.formCreatePrinter.reset();
    }

}
