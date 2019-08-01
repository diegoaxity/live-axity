import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { MessageService } from '../services/message.service';
import { User } from '../models/user';

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
    private messageService: MessageService
  ) {
    this.formRegister = this.formBuilder.group({
      nickname: ['', [Validators.required, Validators.pattern('^[0-9A-Za-z]*$')]],
      // tslint:disable-next-line: max-line-length
      email: ['', [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  register() {
    const user = new User();
    user.userAlias = this.formRegister.get('nickname').value;
    user.userEmail = this.formRegister.get('email').value;
    user.userName = this.formRegister.get('firstName').value;
    user.userLastName = this.formRegister.get('lastName').value;
    // user.phone = this.formRegister.get('phone').value;
    this.authService.register(user).subscribe(res => {
      // TODO registro correcto
    }, err => {
      this.messageService.postMessage(err);
    });
  }

  loginSocial(type: string) {
    console.log(type);
  }
}
