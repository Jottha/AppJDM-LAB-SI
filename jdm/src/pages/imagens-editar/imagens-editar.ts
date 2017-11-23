import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Subscription } from "rxjs/Subscription";
import { FirebaseObjectObservable, AngularFireDatabase } from "angularfire2/database";
import { Imagem } from "../../models/imagem.models";

@IonicPage()
@Component({
  selector: 'page-imagens-editar',
  templateUrl: 'imagens-editar.html',
})
export class ImagensEditarPage {

  novaImagemSubscription: Subscription;
  Imagem$: FirebaseObjectObservable<Imagem>;
  novaImagem = {} as Imagem;

  constructor(public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase) {

    const novaImagemId = this.navParams.get('novaImagemId');
    console.log(novaImagemId);

    this.Imagem$ = this.database.object(`Lista de Imagens/${novaImagemId}`);
    this.novaImagemSubscription =
      this.Imagem$.subscribe(novaImagem => this.novaImagem = novaImagem);
  }

  editarNovaImagem(novaImagem: Imagem) {
    this.Imagem$.update(novaImagem);
    this.navCtrl.pop();
  }

  ionViewWillLeave() {
    this.novaImagemSubscription.unsubscribe();
  }
}
