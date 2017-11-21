import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { FirebaseListObservable, AngularFireDatabase } from "angularfire2/database";
import { Evento } from "../../models/evento.models";
import { EventosEditarPage } from "../eventos-editar/eventos-editar";
import { EventosPage } from "../eventos/eventos";

@IonicPage()
@Component({
  selector: 'page-eventos-lista',
  templateUrl: 'eventos-lista.html',
})
export class EventosListaPage {

  Evento$: FirebaseListObservable<Evento[]>
  
    constructor(public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase, private actionSheetCtrl: ActionSheetController) {
      this.Evento$ = this.database.list('Lista de Eventos');
    }
  
    selecionarNovoEvento(novoEvento: Evento) {
      this.actionSheetCtrl.create({
        title: `${novoEvento.descricao}`,
        buttons: [
          {
            text: 'Editar',
            handler: () => {
              this.navCtrl.push(EventosEditarPage,
                { novoEventoId: novoEvento.$key });
  
            }
          },
          {
            text: 'Remover',
            role: 'destructive',
            handler: () => {
              this.Evento$.remove(novoEvento.$key);
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
  
    eventosPage() {
      this.navCtrl.push(EventosPage);
    }
  
  }