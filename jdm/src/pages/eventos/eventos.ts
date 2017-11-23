import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Evento } from "../../models/evento.models";
import { EventosEditarPage } from "../eventos-editar/eventos-editar";


@IonicPage()
@Component({
  selector: 'page-eventos',
  templateUrl: 'eventos.html',
})
export class EventosPage {

  novoEvento= {} as Evento;

  Evento$: FirebaseListObservable<Evento[]>

    constructor(public af: AngularFireDatabase, public navCtrl: NavController,) {
      this.Evento$ = this.af.list('Eventos');
    }
  
    addEvento(novoEvento: Evento) {
      this.Evento$.push({
        descricao: this.novoEvento.descricao,
        dataInicio: this.novoEvento.dataInicio,
        dataFim: this.novoEvento.dataFim,
      });

      this.novoEvento = {} as Evento;
      this.navCtrl.pop();
    }

    editar(){
      this.navCtrl.push(EventosEditarPage);
    }

}