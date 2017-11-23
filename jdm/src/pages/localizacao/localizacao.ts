import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from "../home/home";

@IonicPage()
@Component({
  selector: 'page-localizacao',
  templateUrl: 'localizacao.html',
})
export class LocalizacaoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  cancelar(){
    this.navCtrl.push(HomePage);
  }

}