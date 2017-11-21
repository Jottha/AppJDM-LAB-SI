import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlunosPage } from "../alunos/alunos";
import { EventosPage } from "../eventos/eventos";
import { NoticiasPage } from "../noticias/noticias";
import { ProfessoresPage } from "../professores/professores";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  
  public alunos() {
    this.navCtrl.push(AlunosPage);
  }
    
  public eventos() {
    this.navCtrl.push(EventosPage);
  }
  
  public noticias(){
    this.navCtrl.push(NoticiasPage)
  }

  public professores(){
    this.navCtrl.push(ProfessoresPage)
  }

}
