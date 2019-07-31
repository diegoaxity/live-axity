import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { MessageService } from '../services/message.service';

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
      nickname: ['', [Validators.required, Validators.pattern(/[A-Za-z0-9]+/)]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  register() {

  }

  loginSocial(type: string) {
    console.log(type);
  }
}
