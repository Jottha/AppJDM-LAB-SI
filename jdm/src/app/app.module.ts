import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {AngularFireModule, AuthProviders, AuthMethods } from 'angularFire2';
import { MyApp } from './app.component';

import { Login2Page } from '../pages/login2/login2';
import { AlunosPage} from '../pages/alunos/alunos';
import { EventosPage } from '../pages/eventos/eventos';
import { FuncionariosPage } from '../pages/funcionarios/funcionarios';
import { HomePage } from '../pages/home/home';
import { ImagensPage } from '../pages/imagens/imagens';
import { JdmPage } from '../pages/jdm/jdm';
import { MenuPage } from '../pages/menu/menu';
import { NoticiasPage } from '../pages/noticias/noticias';
import { ProfessoresPage } from '../pages/professores/professores';

import { AuthProvider } from './../providers/auth/auth';
import { HttpModule } from '@angular/http';


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
    AlunosPage,
    EventosPage,
    FuncionariosPage,
    HomePage,
    ImagensPage,
    JdmPage,
    MenuPage,
    NoticiasPage,
    ProfessoresPage
    
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
    AlunosPage,
    EventosPage,
    FuncionariosPage,
    HomePage,
    ImagensPage,
    JdmPage,
    MenuPage,
    NoticiasPage,
    ProfessoresPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}]
    AuthProvider
  ]
})
export class AppModule {}