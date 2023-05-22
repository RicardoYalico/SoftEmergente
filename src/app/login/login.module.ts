import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: SignInComponent },
]; // sets up routes constant where you define your routes

@NgModule({
  declarations: [
    SignInComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class LoginModule { }
