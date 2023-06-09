import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';
import {FlexModule} from "@angular/flex-layout";


const routes: Routes = [
  { path: '', component: RegisterComponent },
]; // sets up routes constant where you define your routes


@NgModule({
  declarations: [
    RegisterComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    ReactiveFormsModule,
    FlexModule
  ]
})
export class RegisterModule { }
