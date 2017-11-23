import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Subscription } from "rxjs/Subscription";
import { FirebaseObjectObservable, AngularFireDatabase } from "angularfire2/database";
import { Professor } from "../../models/professor.models";

@IonicPage()
@Component({
  selector: 'page-professores-editar',
  templateUrl: 'professores-editar.html',
})
export class ProfessoresEditarPage {

  novoProfessorSubscription: Subscription;
  Professor$: FirebaseObjectObservable<Professor>;
  novoProfessor = {} as Professor;

  constructor(public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase) {

    const novoProfessorId = this.navParams.get('novoProfessorId');
    console.log(novoProfessorId);

    this.Professor$ = this.database.object(`Lista de Professores/${novoProfessorId}`);
    this.novoProfessorSubscription =
      this.Professor$.subscribe(novoProfessor => this.novoProfessor = novoProfessor);
  }

  editarNovoProfessor(novoProfessor: Professor) {
    this.Professor$.update(novoProfessor);
    this.navCtrl.pop();
  }

  ionViewWillLeave() {
    this.novoProfessorSubscription.unsubscribe();
  }
}
