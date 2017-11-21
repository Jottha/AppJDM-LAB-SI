import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ImagensListaPage } from './imagens-lista';

@NgModule({
  declarations: [
    ImagensListaPage,
  ],
  imports: [
    IonicPageModule.forChild(ImagensListaPage),
  ],
  entryComponents: [ImagensListaPage]
})
export class ImagensListaPageModule {}
