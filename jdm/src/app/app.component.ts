import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp 
{ 
  @ViewChild('NAV') nav: Nav;
  rootPage:any;

  public pages: Array<{title: string, component: any, icon: string}>;

  constructor(public platform: Platform, 
              public statusBar: StatusBar,
              public splashScreen: SplashScreen,
              
  ) 
  { 
    this.rootPage = HomePage;

    this.pages = [
      
      { title: 'HomePage', component: HomePage, icon: 'homePage' }
  
    ];
    
      this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    platform.ready().then(() => 
    {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToPage(page) {
    this.nav.setRoot(page);
  }
}