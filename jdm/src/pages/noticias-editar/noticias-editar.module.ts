import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NoticiasEditarPage } from './noticias-editar';

@NgModule({
  declarations: [
    NoticiasEditarPage,
  ],
  imports: [
    IonicPageModule.forChild(NoticiasEditarPage),
  ],
  entryComponents: [NoticiasEditarPage]
})
export class NoticiasEditarPageModule {}
