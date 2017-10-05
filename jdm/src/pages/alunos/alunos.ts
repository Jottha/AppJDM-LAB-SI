import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FichaPage } from '../ficha/ficha';

import { FirebaseListObservable } from 'angularfire2';

import { Aluno } from './../../models/aluno.models';
import { AlunoProvider } from './../../providers/aluno/aluno';

@IonicPage()
@Component({
  selector: 'page-alunos',
  templateUrl: 'alunos.html',
})
export class AlunosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlunosPage');
  }

}
