import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserStorage } from 'src/app/service/user-storage';
import { Subscription } from 'rxjs';
import { UserServiceService } from 'src/app/service/user-service.service';
import { UserDTO } from 'src/app/models/UserDTO';

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
  response = '';

  constructor(private userStorage: UserStorage, private userService: UserServiceService) {
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
    const user: UserDTO = { userName: this.userName, password: this.password };
    console.log(JSON.stringify(user));

    this.userService.login(user).subscribe(response => {
      this.response = response;
      console.log('Successful login');
      this.userStorage.storeUserStatus(this.userName);
    }, error => {
      console.log(error);
      this.alertMessage = error;
    });
  }

  onLogoff() {
    this.userStorage.cleanupStorage();
  }

}
