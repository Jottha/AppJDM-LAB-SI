import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Aluno } from './../../models/aluno.models';
import { AlunosEditarPage } from "../alunos-editar/alunos-editar";

@IonicPage()
@Component({
  selector: 'page-alunos',
  templateUrl: 'alunos.html',
})
export class AlunosPage {

  novoAluno= {} as Aluno;

    Aluno$: FirebaseListObservable<Aluno[]>

    constructor(public http: Http, public af: AngularFireDatabase, public navCtrl: NavController,) {
      this.Aluno$ = this.af.list('Alunos');
    }
  
    addAluno(novoAluno: Aluno) {
      this.Aluno$.push({
        nome: this.novoAluno.nome,
        matricula: this.novoAluno.matricula,
        serie: this.novoAluno.serie,
      });

      this.novoAluno = {} as Aluno;
    }

    editar(){
      this.navCtrl.push(AlunosEditarPage);
    }

}
