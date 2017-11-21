import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NoticiasListaPage } from './noticias-lista';

@NgModule({
  declarations: [
    NoticiasListaPage,
  ],
  imports: [
    IonicPageModule.forChild(NoticiasListaPage),
  ],
  entryComponents: [NoticiasListaPage]
})
export class NoticiasListaPageModule {}
