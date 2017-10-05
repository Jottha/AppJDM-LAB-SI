import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { AngularFireAuth, FirebaseAuthState } from "angularfire2";
import { BaseProvider } from "../base/base";

@Injectable()
export class AuthProvider extends BaseProvider {

  constructor(
    public auth: AngularFireAuth,
    public http: Http
    ) {
      super();
    console.log('Hello AuthProvider Provider');
  }

  createAuthUser(aluno: {email: string, password: string }): firebase.Promise<FirebaseAuthState> {
    return this.auth.createUser(aluno)
    .catch(this.handlePromiseError);
  }

  signinWithEmail(aluno: { email: string, password: string }): firebase.Promise<boolean>{
    return this.auth.login(aluno)
    .then((authProvider: FirebaseAuthState) => {
      return authProvider != null;
    }).catch(this.handlePromiseError);
  }

}
