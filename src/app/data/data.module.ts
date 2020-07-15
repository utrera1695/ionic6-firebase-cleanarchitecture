import { NgModule } from '@angular/core';
import { DataBaseModule } from './repository/dataBase/database.module';

@NgModule({
  declarations: [],
  imports: [
    // MockModule
    DataBaseModule,
  ],
  providers: [],
  exports: [],
})
export class DataModule {}
