import { LoginComponent } from './login/login.component';

import { NgModule } from "@angular/core";
import { SignComponent } from './sign/sign.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@NgModule({
    declarations: [
        LoginComponent,
        SignComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    exports: [
    
    ],
    providers: [],
})

export class PagesModule{}