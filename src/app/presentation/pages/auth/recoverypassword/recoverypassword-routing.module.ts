import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecoverypasswordPage } from './recoverypassword.page';

const routes: Routes = [
  {
    path: '',
    component: RecoverypasswordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecoverypasswordPageRoutingModule {}
