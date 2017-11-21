import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { Noticia } from "../../models/noticia.models";
import { FirebaseListObservable, AngularFireDatabase } from "angularfire2/database";
import { NoticiasEditarPage } from "../noticias-editar/noticias-editar";
import { NoticiasPage } from "../noticias/noticias";

@IonicPage()
@Component({
  selector: 'page-noticias-lista',
  templateUrl: 'noticias-lista.html',
})
export class NoticiasListaPage {

  Noticia$: FirebaseListObservable<Noticia[]>
  
    constructor(public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase, private actionSheetCtrl: ActionSheetController) {
      this.Noticia$ = this.database.list('Lista de Noticias');
    }
  
    selecionarNovaNoticia(novaNoticia: Noticia) {
      this.actionSheetCtrl.create({
        title: `${novaNoticia.titulo}`,
        buttons: [
          {
            text: 'Editar',
            handler: () => {
              this.navCtrl.push(NoticiasEditarPage,
                { novaNoticiaId: novaNoticia.$key });
  
            }
          },
          {
            text: 'Remover',
            role: 'destructive',
            handler: () => {
              this.Noticia$.remove(novaNoticia.$key);
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
  
    noticiasPage() {
      this.navCtrl.push(NoticiasPage);
    }
  
  }