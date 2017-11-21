import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlunosListaPage } from './alunos-lista';

@NgModule({
  declarations: [
    AlunosListaPage,
  ],
  imports: [
    IonicPageModule.forChild(AlunosListaPage),
  ],
  entryComponents: [AlunosListaPage]
})
export class AlunosListaPageModule {}
