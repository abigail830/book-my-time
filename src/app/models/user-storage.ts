import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class UserStorage {
    private navItemSource = new BehaviorSubject<boolean>(false);
    navItem$ = this.navItemSource.asObservable();

    public storeUserStatus(userName: string) {
        const curerntDate = new Date();
        localStorage.setItem('login-time', '' + curerntDate);
        localStorage.setItem('status', 'logined');
        localStorage.setItem('userName', userName);
        this.navItemSource.next(true);
    }

    public cleanupStorage() {
        localStorage.removeItem('status');
        localStorage.removeItem('login-time');
        localStorage.removeItem('userName');
        this.navItemSource.next(false);
    }

    public isUserSignon(): boolean {
        this.printLocalStorage();
        return (localStorage.getItem('status') === 'logined')
            && !this.isLoginExpiried();
    }

    public getUserName(): string {
        return localStorage.getItem('userName');
    }

    private printLocalStorage(): void {
        console.log(localStorage.getItem('status'));
        console.log(localStorage.getItem('login-time'));
        console.log(localStorage.getItem('userName'));
    }

    private isLoginExpiried(): boolean {
        const date = new Date(localStorage.getItem('login-time'));
        const today = new Date();
        return date.toDateString() !== today.toDateString();
    }
}
