import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'angularx-social-login';
import { FacebookLoginProvider, GoogleLoginProvider } from 'angularx-social-login';
import { MessageService } from '../services/message.service';
import { User } from '../models/user';
import { environment } from 'src/environments/environment';
import { ConsumeService } from '../services/consume.service';
import { Storage } from '@ionic/storage';

declare var FB: any;
declare var OAuth: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  axityLive = 'assets/img/logo_live.png';
  axityCreacionesDigitales = 'assets/img/creaciones_digitales.png';
  formRegister: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private consumeService: ConsumeService,
    private messageService: MessageService,
    private storage: Storage
  ) {
    this.formRegister = this.formBuilder.group({
      nickname: ['', [Validators.required, Validators.pattern('^[0-9A-Za-z]*$')]],
      // tslint:disable-next-line: max-line-length
      email: ['', [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
    });
  }

  ngOnInit() {
    (window as any).fbAsyncInit = function () {
      FB.init({
        appId: environment.fbAppId,
        cookie: true,
        xfbml: true,
        version: environment.fbVersion
      });
      FB.AppEvents.logPageView();
    };
    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s); js.id = id;
      js.src = environment.fbUrlSDK;
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', environment.fbJSSDK));
  }

  register() {
    const user = new User();
    user.userAlias = this.formRegister.get('nickname').value;
    user.userEmail = this.formRegister.get('email').value;
    user.userName = this.formRegister.get('firstName').value;
    user.userLastName = this.formRegister.get('lastName').value;
    // // user.phone = this.phoneControl.value;
    this.consumeService.register(user).subscribe(res => {
      if (res) {
        this.storage.set('user', res);
        this.router.navigate(['/home']);
        this.messageService.postMessage('Bienvenido: ' + res.userName);
      } else {
        this.messageService.postMessage('Ocurrió un error en el registro');
      }
    }, err => {
      this.messageService.postMessage(err);
    });
  }

  loginSocial(type: string) {
    console.log(type);
    if (type === 'facebook') {
      this.fbAuthUser();
    } else if (type === 'google') {
      this.signInWithGoogle();
    } else if (type === 'linkedin') {
      this.signInWithLinkedin();
    }
  }

  fbAuthUser() {
    FB.login(res => {
      this.checkLoginStatus(res);
    });
  }

  checkLoginStatus(response) {
    const form = this.formRegister;
    if (response && response.status === 'connected') {
      // SI NO ENCONTRAMOS LA MAC traer datos de la cuenta de facebook
      FB.api('/me?fields=id,first_name,last_name,email', (res) => {
        console.log(res);
        // form.controls.userName.setValue(response.first_name);
        // form.controls.userLastName.setValue(response.last_name);
        // form.controls.userEmail.setValue(response.email);
        // form.controls.userRegisterMethod.setValue('FB');
      });
    } else {
      // TIENE SESION INICIADA validar que
    }
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    this.authService.authState.subscribe((user) => {
      console.log(user);
      //  this.user = user;
      //  this.loggedIn = (user != null);
      //  if (this.loggedIn){
      //     this.formLogin.controls.userName.setValue(user.firstName);
      //     this.formLogin.controls.userLastName.setValue(user.lastName);
      //     this.formLogin.controls.userEmail.setValue(user.email);
      //     this.formLogin.controls.userRegisterMethod.setValue('GMAIL');
      //  }
    });
  }

  signInWithLinkedin() {
    // your app id from oauth.io
    OAuth.initialize('zHGBw9YXxVjem14ESmh_HHggd7c');
    OAuth.popup('linkedin2').then(linkedin => {
      linkedin.me().then(data => {
        console.log(data);
        // this.formLogin.controls.userName.setValue(data.firstname);
        // this.formLogin.controls.userLastName.setValue(data.lastname);
        // this.formLogin.controls.userEmail.setValue(data.email);
        // this.formLogin.controls.userRegisterMethod.setValue('LINKEDIN');
      });
    });
  }
}
