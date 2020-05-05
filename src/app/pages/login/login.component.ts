import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserStorage } from 'src/app/models/user-storage';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  hide = true;
  alertMessage = '';
  userName = '';
  password = '';
  isUserLogined = false;
  subscription: Subscription;

  constructor(public userStorage: UserStorage) {
    if (userStorage.isUserSignon()) {
      this.isUserLogined = true;
      this.userName = userStorage.getUserName();
    }
  }

  ngOnInit() {
    this.subscription = this.userStorage.navItem$
      .subscribe(item => this.isUserLogined = item);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSubmit() {
    if (this.userName === 'SaraQian' && this.password === '123456') {
      this.userStorage.storeUserStatus(this.userName);
    }
  }
  onLogoff() {
    this.userStorage.cleanupStorage();
  }

}
