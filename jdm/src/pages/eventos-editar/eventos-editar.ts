import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Evento } from "../../models/evento.models";
import { Subscription } from "rxjs/Subscription";
import { FirebaseObjectObservable, AngularFireDatabase } from "angularfire2/database";

@IonicPage()
@Component({
  selector: 'page-eventos-editar',
  templateUrl: 'eventos-editar.html',
})
export class EventosEditarPage {

  novoEventoSubscription: Subscription;
  Evento$: FirebaseObjectObservable<Evento>;
  novoEvento = {} as Evento;

  constructor(public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase) {

    const novoEventoId = this.navParams.get('novoEventoId');
    console.log(novoEventoId);

    this.Evento$ = this.database.object(`Lista de Eventos/${novoEventoId}`);
    this.novoEventoSubscription =
      this.Evento$.subscribe(novoEvento => this.novoEvento = novoEvento);
  }

  editarNovoAluno(novoEvento: Evento) {
    this.Evento$.update(novoEvento);
    this.navCtrl.pop();
  }

  ionViewWillLeave() {
    this.novoEventoSubscription.unsubscribe();
  }
}
