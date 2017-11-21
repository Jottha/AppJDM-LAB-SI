import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Subscription } from "rxjs/Subscription";
import { FirebaseObjectObservable, AngularFireDatabase } from "angularfire2/database";
import { Noticia } from "../../models/noticia.models";

@IonicPage()
@Component({
  selector: 'page-noticias-editar',
  templateUrl: 'noticias-editar.html',
})
export class NoticiasEditarPage {

  novaNoticiaSubscription: Subscription;
  Noticia$: FirebaseObjectObservable<Noticia>;
  novaNoticia = {} as Noticia;

  constructor(public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase) {

    const novaNoticiaId = this.navParams.get('novaNoticiaId');
    console.log(novaNoticiaId);

    this.Noticia$ = this.database.object(`Lista de Noticias/${novaNoticiaId}`);
    this.novaNoticiaSubscription =
      this.Noticia$.subscribe(novaNoticia => this.novaNoticia = novaNoticia);
  }

  editarNovoAluno(novaNoticia: Noticia) {
    this.Noticia$.update(novaNoticia);
    this.navCtrl.pop();
  }

  ionViewWillLeave() {
    this.novaNoticiaSubscription.unsubscribe();
  }
}
