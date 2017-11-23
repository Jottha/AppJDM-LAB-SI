import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventosEditarPage } from './eventos-editar';

@NgModule({
  declarations: [
    EventosEditarPage,
  ],
  imports: [
    IonicPageModule.forChild(EventosEditarPage),
  ],
  entryComponents: [EventosEditarPage]
})
export class EventosEditarPageModule {}
