import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { FirebaseListObservable, AngularFireDatabase } from "angularfire2/database";
import { Professor } from "../../models/professor.models";
import { ProfessoresEditarPage } from "../professores-editar/professores-editar";
import { ProfessoresPage } from "../professores/professores";

@IonicPage()
@Component({
  selector: 'page-professores-lista',
  templateUrl: 'professores-lista.html',
})
export class ProfessoresListaPage {


  Professor$: FirebaseListObservable<Professor[]>
  
    constructor(public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase, private actionSheetCtrl: ActionSheetController) {
      this.Professor$ = this.database.list('/Professores');
    }
  
    selecionarNovoProfessor(novoProfessor: Professor) {
      this.actionSheetCtrl.create({
        title: `${novoProfessor.nome}`,
        buttons: [
          {
            text: 'Editar',
            handler: () => {
              this.navCtrl.push(ProfessoresEditarPage,
                { novoProfessorId: novoProfessor.$key });
  
            }
          },
          {
            text: 'Remover',
            role: 'destructive',
            handler: () => {
              this.Professor$.remove(novoProfessor.$key);
            }
          },
          {
            text: 'Cancelar',
            role: 'cancel',
            handler: () => {
              console.log("CANCELADO");
            }
          }
        ]
      }).present();
    }
  
    professoresPage() {
      this.navCtrl.push(ProfessoresPage);
    }
  
  }
