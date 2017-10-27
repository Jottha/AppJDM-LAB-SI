import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { JdmPage } from "../jdm/jdm";
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  jdms: FirebaseListObservable<any>;

  constructor(
    public navCtrl: NavController, 
    public db: AngularFireDatabase, 
    public navParams: NavParams,
    )
  {
    this.jdms = db.list('/Jdms');
    console.log(this.jdms);
  }
  ionViewDidLoad()
  {
    console.log('ionViewDidLoad HomePage');
  }
  pagina1()
  {
    this.navCtrl.push(JdmPage);
  }
}