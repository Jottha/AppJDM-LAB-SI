import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';


import { AlunosListaPage } from '../pages/alunos-lista/alunos-lista';
import { ProfessoresListaPage } from '../pages/professores-lista/professores-lista';
import { EventosListaPage } from '../pages/eventos-lista/eventos-lista';
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
  public rootPage:any;
  public pages: Array<{title: string, component: any, icon: string}>;

  

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
  
    this.rootPage = LoginPage;
  this.pages = [
      
      { title: 'Home', component: HomePage, icon: 'home' },

      { title: 'Sobre', component: SobrePage, icon: 'school'},

      { title: 'Alunos', component: AlunosListaPage, icon: 'people'},

      { title: 'Professores', component: ProfessoresListaPage, icon: 'people'},  

      { title: 'Eventos', component: EventosListaPage, icon: 'calendar' },

      { title: 'Imagens', component: ImagensListaPage, icon: 'images'},

      { title: 'Noticias', component: NoticiasListaPage, icon: 'images'},

      { title: 'Localizacao', component: LocalizacaoPage, icon: 'navigate'}
      
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