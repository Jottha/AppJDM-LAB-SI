import { LoginPage } from './../login/login';
import { RegistroProvider } from './../../providers/registro/registro';

import { Usuario } from './../../models/usuario';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RegistrarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registrar',
  templateUrl: 'registrar.html',
})
export class RegistrarPage {
    usuario: Usuario;
  
    constructor(public navCtrl: NavController,
                public registroProvider: RegistroProvider ) {
                this.usuario = new Usuario();
    }
  
    registrar(){
      this.registroProvider.registrarSe(this.usuario);
      this.navCtrl.push(LoginPage);
    }
  
  
}