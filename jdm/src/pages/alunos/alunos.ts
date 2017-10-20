import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FichaPage } from '../ficha/ficha';
import { Firebase } from '@ionic-native/firebase';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';

import { Aluno } from './../../models/aluno.models';
import { AlunoProvider } from './../../providers/aluno/aluno';
//Alunossssssssssssssssss
@IonicPage()
@Component({
  selector: 'page-alunos',
  templateUrl: 'alunos.html',
})
export class AlunosPage {

  constructor(private firebase: Firebase,
              public navCtrl: NavController,
              public navParams: NavParams)
  {   
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlunosPage');
  }

  getToken()
  {
    this.firebase.getToken()
    .then(token => console.log(`The token is ${token}`)) // save the token server-side and use it to push notifications to this device
    .catch(error => console.error('Error getting token', error));
  }

  onTokenRefresh()
  {
    this.firebase.onTokenRefresh()
    .subscribe((token: string) => console.log(`Got a new token ${token}`));
  }

}
