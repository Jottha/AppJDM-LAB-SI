
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { HttpModule } from '@angular/http/http';
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

export const firebaseConfig =
  {
    apiKey: "AIzaSyA89oAAa-vXPL1Ick_PNHPYthqwNmCQ784",
    authDomain: "cuide-se-bem-8ff65.firebaseapp.com",
    databaseURL: "https://cuide-se-bem-8ff65.firebaseio.com",
    projectId: "cuide-se-bem-8ff65",
    storageBucket: "cuide-se-bem-8ff65.appspot.com",
    messagingSenderId: "1087957543161"
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

  ],
  imports: [
    BrowserModule,
    HttpModule,
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
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }]

})
export class AppModule { }