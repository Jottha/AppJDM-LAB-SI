import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { RegistroProvider } from "../registro/registro";

@Injectable()
export class AlunoProvider {
  items: FirebaseListObservable<any[]>;
  constructor(
              public registroProvider:RegistroProvider,
              public db: AngularFireDatabase,
            ) 
  {
              {
                var path = '/disciplina/';
                 this.items = db.list(path);
              };
    
  }
  getAll(){
    return this.items;
  }  
}