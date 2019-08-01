import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConsumeService } from '../services/consume.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-recover',
  templateUrl: './recover.page.html',
  styleUrls: ['./recover.page.scss'],
})
export class RecoverPage implements OnInit {
  formRecover: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private consumeService: ConsumeService,
    private messageService: MessageService
  ) {
    this.formRecover = this.formBuilder.group({
      // tslint:disable-next-line: max-line-length
      email: ['', [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]]
    });
  }

  ngOnInit() {
  }

  recover() {
    this.consumeService.recover(this.formRecover.get('email').value)
      .subscribe(res => {
        this.messageService.postMessage(res);
        this.router.navigate(['/login']);
      }, err => {
        this.messageService.postMessage(err);
      });
  }
}
