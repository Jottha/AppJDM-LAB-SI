import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventosListaPage } from './eventos-lista';

@NgModule({
  declarations: [
    EventosListaPage,
  ],
  imports: [
    IonicPageModule.forChild(EventosListaPage),
  ],
  entryComponents: [EventosListaPage]
})
export class EventosListaPageModule {}
