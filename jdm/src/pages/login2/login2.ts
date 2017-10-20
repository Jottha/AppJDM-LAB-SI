import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { AuthProviders, AuthMethods } from 'angularfire2';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthProvider } from '../../providers/auth/auth';
import { AfAuth } from '../../providers/auth/auth';
import { FirebaseAuthState } from 'angularfire2';


import { NgModule, NgZone } from '@angular/core';


import { FirebaseApp, AngularFireModule } from 'angularfire2';

/**
 * Generated class for the Login2Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login2',
  templateUrl: 'login2.html',
})
export class Login2Page {
  afAuth: any;

  autenticacao: FirebaseAuthState;
  email: string;
  senha: string;
    
  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public af: AngularFire,
              public authProvider: AuthProvider,
              public afAuth: AfAuth
              )

              //this.user = afAuth.authState; // only triggered on sign-in/out (for old behavior use .idToken)
  {           
              this.af.auth.subscribe( estado => {
                this.autenticacao = estado !== null;
              });

  }

  cadastrar(){ 
    let dados = { 'email': this.email, 'password': this.senha };
    this.af.auth.createUser(dados).then(() => {
       console.log(this.af.auth); // USUÁRIO CRIADO
    }, erro => {
       console.log("Erro no cadastro"); // TRATAR O ERRO
    });
  }

  login(){

    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    this.af.auth.login({
      email: this.email,
      password: this.senha,
    },
    {
      provider: AuthProviders.Password,
      method: AuthMethods.Password,
    });
  }
  
  logout(){ 
    this.af.auth.logout();
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad Login2Page');
  }

}