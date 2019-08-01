import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { Storage } from '@ionic/storage';

import { FCM } from '@ionic-native/fcm/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private fcm: FCM,
    private router: Router,
    private screenOrientation: ScreenOrientation,
    private storage: Storage
  ) {
    this.splashScreen.show();

    // obtener token FCM
    this.fcm.getToken().then(token => {
      console.log(token);
    });

    // actualizar token
    this.fcm.onTokenRefresh().subscribe(token => {
      console.log(token);
    });

    // recibir notificaciones
    this.fcm.onNotification().subscribe(data => {
      console.log(data);
      if (data.wasTapped) {
        console.log('Received in background');
        this.router.navigate([data.landing_page, data.price]);
      } else {
        console.log('Received in foreground');
        this.router.navigate([data.landing_page, data.price]);
      }
    });

    // suscripcion a topico
    this.fcm.subscribeToTopic('liveaxity');

    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.storage.get('user').then((user) => {
        console.log(user);
        if (user) {
          this.router.navigate(['/tabs/tab1']);
        }
      });
    });
  }
}
