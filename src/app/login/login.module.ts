import { LoginComponent } from './login.component';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";


@NgModule({
    declarations: [
        LoginComponent,
    ],
    imports: [
        CommonModule
    ],
    exports: [
        LoginComponent
    ],
    providers: []
})

export class LoginModule{}