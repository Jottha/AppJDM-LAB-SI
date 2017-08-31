import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JdmPage } from './jdm';

@NgModule({
  declarations: [
    JdmPage,
  ],
  imports: [
    IonicPageModule.forChild(JdmPage),
  ],
})
export class JdmPageModule {}
