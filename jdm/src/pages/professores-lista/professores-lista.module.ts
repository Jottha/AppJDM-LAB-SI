import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfessoresListaPage } from './professores-lista';

@NgModule({
  declarations: [
    ProfessoresListaPage,
  ],
  imports: [
    IonicPageModule.forChild(ProfessoresListaPage),
  ],
  entryComponents: [ProfessoresListaPage]
})
export class ProfessoresListaPageModule {}
