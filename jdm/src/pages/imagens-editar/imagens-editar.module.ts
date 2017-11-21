import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ImagensEditarPage } from './imagens-editar';

@NgModule({
  declarations: [
    ImagensEditarPage,
  ],
  imports: [
    IonicPageModule.forChild(ImagensEditarPage),
  ],
  entryComponents: [ImagensEditarPage]
})
export class ImagensEditarPageModule {}
