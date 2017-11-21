import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfessoresPage } from './professores';

@NgModule({
  declarations: [
    ProfessoresPage,
  ],
  imports: [
    IonicPageModule.forChild(ProfessoresPage),
  ],
  entryComponents: [ProfessoresPage]
})
export class ProfessoresPageModule {}
