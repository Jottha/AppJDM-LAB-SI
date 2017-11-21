import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlunosEditarPage } from './alunos-editar';

@NgModule({
  declarations: [
    AlunosEditarPage,
  ],
  imports: [
    IonicPageModule.forChild(AlunosEditarPage),
  ],
  entryComponents: [AlunosEditarPage]
})
export class AlunosEditarPageModule {}
