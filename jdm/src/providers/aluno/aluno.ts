import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Aluno } from './../../models/aluno.model';
import { BaseProvider } from "../base/base";

@Injectable()
export class AlunoProvider extends BaseProvider{

  alunos: FirebaseListObservable<Aluno[]>;

  constructor(
    public http: Http,
    public af: AngularFire
    ) {
      super();
      this.alunos = this.af.database.list(`/alunos`);
  }

  create(aluno: Aluno): firebase.Promise<void> {
    return this.af.database.object(`/alunos/${ aluno.uid }`)
    .set(aluno)
    .catch(this.handlePromiseError);
  }

}
