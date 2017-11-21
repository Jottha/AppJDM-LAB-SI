import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { AlunosEditarPage } from "../alunos-editar/alunos-editar";
import { AlunosPage } from "../alunos/alunos";
import { Aluno } from "../../models/aluno.models";
import { FirebaseListObservable, AngularFireDatabase } from "angularfire2/database";

@IonicPage()
@Component({
  selector: 'page-alunos-lista',
  templateUrl: 'alunos-lista.html',
})
export class AlunosListaPage {

  Aluno$: FirebaseListObservable<Aluno[]>
  
    constructor(public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase, private actionSheetCtrl: ActionSheetController) {
      this.Aluno$ = this.database.list('Lista de Alunos');
    }
  
    selecionarNovoAluno(novoAluno: Aluno) {
      this.actionSheetCtrl.create({
        title: `${novoAluno.nome}`,
        buttons: [
          {
            text: 'Editar',
            handler: () => {
              this.navCtrl.push(AlunosEditarPage,
                { novoAlunoId: novoAluno.$key });
  
            }
          },
          {
            text: 'Remover',
            role: 'destructive',
            handler: () => {
              this.Aluno$.remove(novoAluno.$key);
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
  
    alunosPage() {
      this.navCtrl.push(AlunosPage);
    }
  
  }