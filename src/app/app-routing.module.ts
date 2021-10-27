import { LoginComponent } from './login/login.component';
import { SignComponent } from './sign/sign.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo:'signUpApplication',
    pathMatch:'full'
  },
  {
    path: 'signUpApplication',
    component: SignComponent
  },
  {
    path: 'loginApplication',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
