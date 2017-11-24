
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { MyApp } from './app.component';

import { AlunosPage } from '../pages/alunos/alunos';
import { EventosPage } from '../pages/eventos/eventos';
import { HomePage } from '../pages/home/home';
import { ImagensPage } from '../pages/imagens/imagens';
import { NoticiasPage } from '../pages/noticias/noticias';
import { ProfessoresPage } from '../pages/professores/professores';
import { AlunosEditarPage } from "../pages/alunos-editar/alunos-editar";
import { AlunosListaPage } from "../pages/alunos-lista/alunos-lista";
import { EventosEditarPage } from "../pages/eventos-editar/eventos-editar";
import { EventosListaPage } from "../pages/eventos-lista/eventos-lista";
import { ImagensEditarPage } from "../pages/imagens-editar/imagens-editar";
import { ImagensListaPage } from "../pages/imagens-lista/imagens-lista";
import { NoticiasEditarPage } from "../pages/noticias-editar/noticias-editar";
import { NoticiasListaPage } from "../pages/noticias-lista/noticias-lista";
import { ProfessoresEditarPage } from "../pages/professores-editar/professores-editar";
import { ProfessoresListaPage } from "../pages/professores-lista/professores-lista";
import { SobrePage } from "../pages/sobre/sobre";
import { LocalizacaoPage } from "../pages/localizacao/localizacao";
import { LoginPage } from '../pages/login/login';


export const firebaseConfig =
{
  apiKey: "AIzaSyDjRP9KOtydhxhSDIJTKfcTVi8rv1YK_c8",
  authDomain: "appjdm-lab-si-2242b.firebaseapp.com",
  databaseURL: "https://appjdm-lab-si-2242b.firebaseio.com",
  projectId: "appjdm-lab-si-2242b",
  storageBucket: "appjdm-lab-si-2242b.appspot.com",
  messagingSenderId: "609842297942"
}

@NgModule({
  declarations: [
    MyApp,
    AlunosPage,
    EventosPage,
    HomePage,
    ImagensPage,
    NoticiasPage,
    ProfessoresPage,
    AlunosEditarPage,
    AlunosListaPage,
    EventosEditarPage,
    EventosListaPage,
    ImagensEditarPage,
    ImagensListaPage,
    NoticiasEditarPage,
    NoticiasListaPage,
    ProfessoresEditarPage,
    ProfessoresListaPage,
    SobrePage,
    LocalizacaoPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AlunosPage,
    EventosPage,
    HomePage,
    ImagensPage,
    NoticiasPage,
    ProfessoresPage,
    AlunosEditarPage,
    AlunosListaPage,
    EventosEditarPage,
    EventosListaPage,
    ImagensEditarPage,
    ImagensListaPage,
    NoticiasEditarPage,
    NoticiasListaPage,
    ProfessoresEditarPage,
    ProfessoresListaPage,
    SobrePage,
    LocalizacaoPage,
    LoginPage 
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]

})
export class AppModule { }