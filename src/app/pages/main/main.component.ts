import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserStorage } from 'src/app/models/user-storage';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {

  isUserLogined = false;
  subscription: Subscription;

  constructor(public userStorage: UserStorage) {
    if (userStorage.isUserSignon()) {
      this.isUserLogined = true;
    }
  }

  ngOnInit() {
    this.subscription = this.userStorage.navItem$
      .subscribe(item => this.isUserLogined = item);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
