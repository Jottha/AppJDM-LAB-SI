
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';

import { AlunosPage } from '../pages/alunos/alunos';
import { EventosPage } from '../pages/eventos/eventos';
import { FuncionariosPage } from '../pages/funcionarios/funcionarios';
import { HomePage } from '../pages/home/home';
import { ImagensPage } from '../pages/imagens/imagens';
import { JdmPage } from '../pages/jdm/jdm';
import { MenuPage } from '../pages/menu/menu';
import { NoticiasPage } from '../pages/noticias/noticias';
import { ProfessoresPage } from '../pages/professores/professores';

export const firebaseConfig =
  {
    apiKey: "AIzaSyA89oAAa-vXPL1Ick_PNHPYthqwNmCQ784",
    authDomain: "cuide-se-bem-8ff65.firebaseapp.com",
    databaseURL: "https://cuide-se-bem-8ff65.firebaseio.com",
    projectId: "cuide-se-bem-8ff65",
    storageBucket: "cuide-se-bem-8ff65.appspot.com",
    messagingSenderId: "1087957543161"
  }

/* const firebaseAuthConfig = {
  provider: AuthProviders.Custom,
  method: AuthMethods.Password
} */

@NgModule({
  declarations: [
    MyApp,
    AlunosPage,
    EventosPage,
    FuncionariosPage,
    HomePage,
    ImagensPage,
    JdmPage,
    MenuPage,
    NoticiasPage,
    ProfessoresPage,
    

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
    { provide: ErrorHandler, useClass: IonicErrorHandler }]

})
export class AppModule { }