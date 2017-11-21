import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Noticia } from "../../models/noticia.models";
import { FirebaseListObservable, AngularFireDatabase } from "angularfire2/database";
import { Http } from "@angular/http/http";
import { NoticiasEditarPage } from "../noticias-editar/noticias-editar";

@IonicPage()
@Component({
  selector: 'page-noticias',
  templateUrl: 'noticias.html',
})
export class NoticiasPage {

  novaNoticia= {} as Noticia;
  
  Noticia$: FirebaseListObservable<Noticia[]>
  
      constructor(public http: Http, public af: AngularFireDatabase, public navCtrl: NavController,) {
        this.Noticia$ = this.af.list('Noticias');
      }
    
      addNoticia(novaNoticia: Noticia) {
        this.Noticia$.push({
          titulo: this.novaNoticia.titulo,
          dataNoticia: this.novaNoticia.dataNoticia
        });
  
        this.novaNoticia = {} as Noticia;
      }
  
      editar(){
        this.navCtrl.push(NoticiasEditarPage);
      }
  
  }