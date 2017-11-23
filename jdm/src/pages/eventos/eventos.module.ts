import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventosPage } from './eventos';

@NgModule({
  declarations: [
    EventosPage,
  ],
  imports: [
    IonicPageModule.forChild(EventosPage),
  ],
  entryComponents: [EventosPage]
})
export class EventosPageModule {}
