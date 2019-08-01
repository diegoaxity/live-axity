import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { User } from '../models/user';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  menuBot: string = 'assets/icon/menu_bot.png';
  userList: User[];
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    autoplay: {
      delay: 3000,
    }
  };
  private subscription: Subscription = new Subscription();

  constructor(
    private _dataService: DataService
  ) {
  }

  ngOnInit() {
    this.getCustomers();
  }

  // ejemplo de funcion
  getCustomers() {
    return this.subscription.add(this._dataService.getUsers().subscribe(users => {
      console.log(users);
      this.userList = users;
    }));
  }

  ionViewDidLeave() {
    // se elimina subscription
    this.subscription.unsubscribe();
  }

}
