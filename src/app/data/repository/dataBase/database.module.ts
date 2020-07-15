import { NgModule } from '@angular/core';
import { UserDataBaseRepository } from './user/user.repository';
import { UserRepository } from '../../../domain/repositories/user.respository';

@NgModule({
  declarations: [],
  imports: [],
  providers: [
    {
      provide: UserRepository,
      useClass: UserDataBaseRepository,
    },
  ],
  exports: [],
})
export class DataBaseModule {}
