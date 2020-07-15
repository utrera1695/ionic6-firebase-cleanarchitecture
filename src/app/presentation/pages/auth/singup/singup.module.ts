import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SingupPageRoutingModule } from './singup-routing.module';

import { SingupPage } from './singup.page';
import { SaveUserUseCase } from 'src/app/domain/usecases/user/saveuser.usecase';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SingupPageRoutingModule,
  ],
  declarations: [SingupPage],
  providers: [SaveUserUseCase],
})
export class SingupPageModule {}
