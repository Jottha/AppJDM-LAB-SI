import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { JdmPage } from '../pages/jdm/jdm';

import { AlunosListaPage } from '../pages/alunos-lista/alunos-lista';
import { ProfessoresListaPage } from '../pages/professores-lista/professores-lista';
import { EventosListaPage } from '../pages/eventos-lista/eventos-lista';
import { FuncionariosPage } from '../pages/funcionarios/funcionarios';
import { NoticiasListaPage } from '../pages/noticias-lista/noticias-lista';
import { ImagensListaPage } from '../pages/imagens-lista/imagens-lista';
import { SobrePage } from '../pages/sobre/sobre';
import { LocalizacaoPage } from '../pages/localizacao/localizacao';
import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  
  @ViewChild('NAV') nav: Nav;
  public rootPage: LoginPage;
  public pages: Array<{title: string, component: any, icon: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    
  this.pages = [
      
      { title: 'Home', component: HomePage, icon: 'home' },

      { title: 'Sobre', component: SobrePage, icon: 'people'},

      { title: 'Jdm', component: JdmPage , icon: 'bulb'},

      { title: 'Alunos', component: AlunosListaPage, icon: 'people'},

      { title: 'Professores', component: ProfessoresListaPage, icon: 'people'},  

      { title: 'Eventos', component: EventosListaPage, icon: 'calendar' },

      { title: 'Funcionarios', component: FuncionariosPage, icon: 'people'},

      { title: 'Imagens', component: ImagensListaPage, icon: 'people'},

      { title: 'Noticias', component: NoticiasListaPage, icon: 'people'},

      { title: 'Localizacao', component: LocalizacaoPage, icon: 'people'}
      
    ];
    
      this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  goToPage(page) {
    this.nav.setRoot(page);
  }
}