import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  constructor(public toastController: ToastController) { }

  async postMessage(msg: string, duration?: number) {
    const toast = await this.toastController.create({
      message: msg,
      duration: duration || 3000
    });
    toast.present();
  }
}
