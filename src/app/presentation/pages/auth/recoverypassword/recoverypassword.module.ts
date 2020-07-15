import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecoverypasswordPageRoutingModule } from './recoverypassword-routing.module';

import { RecoverypasswordPage } from './recoverypassword.page';
import { RecoveryPassUseCase } from 'src/app/domain/usecases/user/recoverypass.usecase';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecoverypasswordPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [RecoverypasswordPage],
  providers: [RecoveryPassUseCase],
})
export class RecoverypasswordPageModule {}
