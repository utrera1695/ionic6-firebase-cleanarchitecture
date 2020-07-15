import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { LoginUserUseCase } from 'src/app/domain/usecases/user/loginuser.usecase';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    LoginPageRoutingModule,
  ],
  declarations: [LoginPage],
  providers: [LoginUserUseCase],
})
export class LoginPageModule {}
