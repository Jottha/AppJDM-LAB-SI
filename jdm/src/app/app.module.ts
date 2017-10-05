import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {AngularFireModule, AuthProviders, AuthMethods } from 'angularFire2';
import { MyApp } from './app.component';

import { Login2Page } from '../pages/login2/login2';
import { Alunos} from '../pages/alunos/alunos';
import { Eventos } from '../pages/eventos/eventos';
import { Funcionarios } from '../pages/funcionarios/funcionarios';
import { HomePage } from '../pages/home/home';
import { Imagens } from '../pages/imagens/imagens';
import { Jdm } from '../pages/jdm/jdm';
import { Menu } from '../pages/menu/menu';
import { Noticias } from '../pages/noticias/noticias';
import { Professores } from '../pages/professores/professores';

import { AuthProvider } from './../providers/auth/auth';
import { HttpModule } from '@angular/http';
import { UserProvider } from './../providers/user/user';

export const firebaseConfig =
{   apiKey: "AIzaSyDjRP9KOtydhxhSDIJTKfcTVi8rv1YK_c8",
    authDomain: "appjdm-lab-si-2242b.firebaseapp.com",
    databaseURL: "https://appjdm-lab-si-2242b.firebaseio.com",
    projectId: "appjdm-lab-si-2242b",
    storageBucket: "appjdm-lab-si-2242b.appspot.com",
    messagingSenderId: "609842297942"
}

const firebaseAuthConfig = {
  provider: AuthProviders.Custom,
  method: AuthMethods.Password
}

@NgModule({
  declarations: [
    MyApp,
    Login2Page,
    Alunos,
    Eventos,
    Funcionarios,
    HomePage,
    Imagens,
    Jdm,
    Menu,
    Noticias,
    Professores
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Login2Page,
    Alunos,
    Eventos,
    Funcionarios,
    HomePage,
    Imagens,
    Jdm,
    Menu,
    Noticias,
    Professores
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}]
    AuthProvider
  ]
})
export class AppModule {}
