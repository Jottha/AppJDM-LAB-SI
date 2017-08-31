import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseAuthState } from 'angularfire2';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  UserProvider: any;

  signupForm: FormGroup;

  constructor
  (
    public navCtrl: NavController,
    public navParams: NavParams,

    public alertCtrl: AlertController,
    public authProvider: AuthProvider,
    public formBuilder: FormBuilder,
    public loadingCtrl: LoadingController,
    
    public userProvider: UserProvider
  ) 
  { 

  }

  let emailRegex = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

    this.signupForm = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      biografia: ['', [Validators.required, Validators.minLength(3)]],
      academico: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', Validators.compose([Validators.required, Validators.pattern(emailRegex)])],
      password: ['', [Validators.required, Validators.minLength(6)]],
      telefone: ['', [Validators.required, Validators.maxLength(15)]],
    });
  }

   onSubmit(): void {

    let loading: Loading = this.showLoading();
    let formUser = this.signupForm.value

    this.authProvider.createAuthUser({
      email: formUser.email,
      password: formUser.password
    }).then((authState: FirebaseAuthState) => {

      delete formUser.password;

      formUser.uid = authState.auth.uid;

      this.userProvider.create(formUser)
        .then(() => {
          console.log('Usuário Cadastrado!');
          loading.dismiss();
        }).catch((error: any) => {
          console.log(error);
          loading.dismiss();
          this.showAlert(error);
        });

    }).catch((error: any) => {
      console.log(error);
      loading.dismiss();
      this.showAlert(error);
    });
  }

  private showLoading(): Loading {
    let loading: Loading = this.loadingCtrl.create({
      content: 'Please Wait...'
    });

    loading.present();

    return loading;
  }

  private showAlert(message: string): void {
    this.alertCtrl.create({
      message: message,
      buttons: ['Ok']
    }).present();
  }
  /*
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }*/

}