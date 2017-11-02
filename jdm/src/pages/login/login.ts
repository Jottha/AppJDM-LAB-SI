import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IonicPage, NavParams } from 'ionic-angular';
import { Usuario } from '../../models/usuario';
import { RegistrarPage } from '../registrar/registrar';
import { AngularFireAuth } from "angularfire2/auth";
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { HomePage } from '../home/home';



@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [AngularFireAuth]
})
export class LoginPage
{
  usuario: Observable<firebase.User>;
  constructor(public navCtrl: NavController,
              private afAuth: AngularFireAuth,
              public navParams: NavParams
              )
  {   
        this.usuario = afAuth.authState;
  }

  goRegistrar()
  {   
      this.navCtrl.push(RegistrarPage);
  }

  async logarProfessores(usuario: Usuario)
  {   try
      {   const result = this.afAuth.auth.signInWithEmailAndPassword(usuario.email, usuario.senha);
          if(result)
          {
              this.navCtrl.push(HomePage);
          }
      }catch(e){
        console.error(e);
      }   
  }
  async logarAlunos(usuario:Usuario)
  {  try
     {  const result = this.afAuth.auth.signInWithEmailAndPassword(usuario.email, usuario.senha);
        if(result)
        {
          this.navCtrl.push(HomePage);
        }
     }catch(e)
     {  
       console.error(e);
     }
  }
}