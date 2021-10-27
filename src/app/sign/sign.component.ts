import { ContactForm } from '../models/contact-form';
import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
    selector: 'app-sign',
    templateUrl: './sign.component.html' ,
    styleUrls: ['./sign.component.css'],
    providers: []
    
})

export class SignComponent implements OnInit {

    constructor(
        private formBuilder: FormBuilder,
        private router: Router){}
    
    ngOnInit(){}

    //Declaración de formulario y validaciones
    formularioRegistro = this.formBuilder.group({
        nombre: ['', Validators.required],
        apellidos: ['', Validators.required],
        telefono: ['', Validators.compose([Validators.required, Validators.minLength(9)])],
        email: ['', Validators.compose([Validators.email, Validators.required])],
        direccion: [''],
        localidad: [''],
        provincia: [''],
        pass: ['', Validators.required],
        passConfirm: ['', Validators.required],
        conditionCheck: ['', Validators.requiredTrue]
    });
    
    //Acción al enviar formulario
    enviarFormulario(): void {
        console.log("Enviando formulario");
        //Convertir datos form a objeto
    let user: ContactForm = new ContactForm(
        this.formularioRegistro.value.nombre,
        this.formularioRegistro.value.apellidos,
        this.formularioRegistro.value.telefono,
        this.formularioRegistro.value.email,
        this.formularioRegistro.value.direccion,
        this.formularioRegistro.value.localidad,
        this.formularioRegistro.value.provincia,
        this.formularioRegistro.value.pass,
        this.formularioRegistro.value.passConfirm,
        this.formularioRegistro.value.conditionCheck   
    )
    this.router.navigate(['/loginApplication']);
    }
    
}