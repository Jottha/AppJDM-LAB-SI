import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { FirebaseListObservable, AngularFireDatabase } from "angularfire2/database";
import { Imagem } from "../../models/imagem.models";
import { ImagensEditarPage } from "../imagens-editar/imagens-editar";
import { ImagensPage } from "../imagens/imagens";

@IonicPage()
@Component({
  selector: 'page-imagens-lista',
  templateUrl: 'imagens-lista.html',
})
export class ImagensListaPage {

  Imagem$: FirebaseListObservable<Imagem[]>
  
    constructor(public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase, private actionSheetCtrl: ActionSheetController) {
      this.Imagem$ = this.database.list('/Imagens');
    }
  
    selecionarNovaImagem(novaImagem: Imagem) {
      this.actionSheetCtrl.create({
        title: `${novaImagem.legenda}`,
        buttons: [
          {
            text: 'Editar',
            handler: () => {
              this.navCtrl.push(ImagensEditarPage,
                { novaImagemId: novaImagem.$key });
  
            }
          },
          {
            text: 'Remover',
            role: 'destructive',
            handler: () => {
              this.Imagem$.remove(novaImagem.$key);
            }
          },
          {
            text: 'Cancelar',
            role: 'cancel',
            handler: () => {
              console.log("CANCELADO");
            }
          }
        ]
      }).present();
    }
  
    imagensPage() {
      this.navCtrl.push(ImagensPage);
    }
  
  }