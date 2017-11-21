import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseObjectObservable } from "angularfire2/database";
import { Aluno } from "../../models/aluno.models";
import { Subscription } from "rxjs/Subscription";

@IonicPage()
@Component({
  selector: 'page-alunos-editar',
  templateUrl: 'alunos-editar.html',
})
export class AlunosEditarPage {

  novoAlunoSubscription: Subscription;
  Aluno$: FirebaseObjectObservable<Aluno>;
  novoAluno = {} as Aluno;

  constructor(public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase) {

    const novoAlunoId = this.navParams.get('novoAlunoId');
    console.log(novoAlunoId);

    this.Aluno$ = this.database.object(`Lista de Alunos/${novoAlunoId}`);
    this.novoAlunoSubscription =
      this.Aluno$.subscribe(novoAluno => this.novoAluno = novoAluno);
  }

  editarNovoAluno(novoAluno: Aluno) {
    this.Aluno$.update(novoAluno);
    this.navCtrl.pop();
  }

  ionViewWillLeave() {
    this.novoAlunoSubscription.unsubscribe();
  }
}
