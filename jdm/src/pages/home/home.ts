import { AuthService } from '../../providers/auth-service';

import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { AlunosPage } from "../alunos/alunos";
import { EventosPage } from "../eventos/eventos";
import { NoticiasPage } from "../noticias/noticias";
import { ProfessoresPage } from "../professores/professores";
import { ImagensPage } from "../imagens/imagens";
import { SobrePage } from "../sobre/sobre";
import { LocalizacaoPage } from "../localizacao/localizacao";
import { AlunosListaPage } from "../alunos-lista/alunos-lista";
import { ImagensListaPage } from "../imagens-lista/imagens-lista";
import { ProfessoresListaPage } from "../professores-lista/professores-lista";
import { NoticiasListaPage } from "../noticias-lista/noticias-lista";
import { EventosListaPage } from "../eventos-lista/eventos-lista";

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  username = '';
  email = '';
  constructor(private navCtrl: NavController, private auth: AuthService) {
    let info = this.auth.getUserInfo();
    this.username = info['name'];
    this.email = info['email'];
  }
 
  public logout() {
    this.auth.logout().subscribe(succ => {
      this.navCtrl.setRoot('LoginPage')
    });
  }

  public alunos() {
    this.navCtrl.push(AlunosListaPage);
  }
    
  public eventos() {
    this.navCtrl.push(EventosListaPage);
  }
  
  public noticias(){
    this.navCtrl.push(NoticiasListaPage)
  }

  public professores(){
    this.navCtrl.push(ProfessoresListaPage)
  }

  public imagens(){
    this.navCtrl.push(ImagensListaPage)
  }

  public sobre(){
    this.navCtrl.push(SobrePage)
  }

  public localizacao(){
    this.navCtrl.push(LocalizacaoPage)
  }
}
