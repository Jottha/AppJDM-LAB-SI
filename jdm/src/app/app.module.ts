import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {AngularFireModule} from 'angularFire2';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

export const firebaseConfig =
{   apiKey: "AIzaSyC_ILhKFZOvsCJY4oZ8_xTzhdxe7byO75I",
    authDomain: "appjdm-lab-si.firebaseapp.com",
    databaseURL: "https://appjdm-lab-si.firebaseio.com",
    projectId: "appjdm-lab-si",
    storageBucket: "appjdm-lab-si.appspot.com",
    messagingSenderId: "308441218619"
}

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
