import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfessoresEditarPage } from './professores-editar';

@NgModule({
  declarations: [
    ProfessoresEditarPage,
  ],
  imports: [
    IonicPageModule.forChild(ProfessoresEditarPage),
  ],
  entryComponents: [ProfessoresEditarPage]
})
export class ProfessoresEditarPageModule {}
