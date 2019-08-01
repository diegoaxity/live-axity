import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MessageService } from '../services/message.service';
import { ConsumeService } from '../services/consume.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  axityLive = 'assets/img/logo_live.png';
  axityCreacionesDigitales = 'assets/img/creaciones_digitales.png';
  formLogin: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private consumeService: ConsumeService,
    private messageService: MessageService,
    private storage: Storage
  ) {
    this.formLogin = this.formBuilder.group({
      nickname: ['', [Validators.required, Validators.pattern('^[0-9A-Za-z]*$')]],
      // tslint:disable-next-line: max-line-length
      email: ['', [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]]
    });
  }

  ngOnInit() {
  }

  login() {
    this.consumeService.login(this.formLogin.get('nickname').value, this.formLogin.get('email').value)
      .subscribe(res => {
        if (res.exist) {
          const user = res.data[0];
          this.storage.set('user', user);
          this.messageService.postMessage('Bienvenido: ' + user.userName);
          this.router.navigate(['/home']);
        } else {
          this.messageService.postMessage('Datos no encontrados');
        }
      }, err => {
        this.messageService.postMessage(err);
      });
  }
}
