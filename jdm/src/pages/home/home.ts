import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

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

  constructor(private navCtrl: NavController) {
    
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
