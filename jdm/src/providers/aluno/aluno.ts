import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { AngularFire } from 'angularfire2';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Alunos } from './../../models/aluno.models';
import { BaseProvider } from "../base/base";


@Injectable()
export class AlunoProvider {
  items: FirebaseListObservable<any[]>;
  alunomodels: Alunos;
  constructor(
              public registroProvider:RegistroProvider,
              public db: AngularFireDatabase,
            ) {
              {
              var path = '/disciplina/';
              this.items = db.list(path);
            };
    
  }
  getAll(){
    return this.items;
  }  
}