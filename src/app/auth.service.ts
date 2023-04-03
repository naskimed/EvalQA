import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedin = false;

  constructor() { }

  login() {
    this.isLoggedin = true;
  }

  logout() {
    this.isLoggedin = false;
  }

  isLoggedIn() {
    return this.isLoggedin;
  }

}
