import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Professor } from "../../models/professor.models";
import { FirebaseListObservable, AngularFireDatabase } from "angularfire2/database";
import { ProfessoresEditarPage } from "../professores-editar/professores-editar";

@IonicPage()
@Component({
  selector: 'page-professores',
  templateUrl: 'professores.html',
})
export class ProfessoresPage {

  novoProfessor= {} as Professor;
  
  Professor$: FirebaseListObservable<Professor[]>
  
      constructor(public af: AngularFireDatabase, public navCtrl: NavController,) {
        this.Professor$ = this.af.list('Professores');
      }
    
      addProfessor(novoProfessor: Professor) {
        this.Professor$.push({
          nome: this.novoProfessor.nome,
          disciplina: this.novoProfessor.disciplina,
          formacao: this.novoProfessor.formacao,
          idade: this.novoProfessor.idade
        });
  
        this.novoProfessor = {} as Professor;
        this.navCtrl.pop();
      }
  
      editar(){
        this.navCtrl.push(ProfessoresEditarPage);
      }
  
  }
  