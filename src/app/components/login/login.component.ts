import { AuthProvider } from './../../auth.provider';
import { Component, OnInit, HostBinding } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  public user: Observable<firebase.User>;
  private email: String;
  private password: String;
  private errorMsg: String;
  private displayError: Boolean;
  private newAccount: Boolean;

  constructor(public authService: AuthProvider, private router: Router) {
    this.user = authService.user;
    this.email = '';
    this.password = '';
    this.errorMsg = '';
    this.newAccount = false;
    this.displayError = false;
  }

  loginWithGoogle() {
    this.authService.loginWithGoogle().then(
      (response) => {
        console.log('Success');
      },
      (err) => {
        console.log(err.message);
        this.showErrorMessage(err.message);
      }
    );
  }

  loginWithEmail() {
    this.authService.loginWithEmail(this.email, this.password).then(
      (response) => {
        console.log('Success');
      },
      (err) => {
        console.log(err);
        this.showErrorMessage(err.message);
      }
    );
  }

  createAccount() {
    this.authService.registerUser(this.email, this.password).then(
      (response) => {
        console.log('Success');
      },
      (err) => {
        console.log(err);
        this.showErrorMessage(err.message);
      }
    );
  }

  showErrorMessage(msg: String) {
    this.errorMsg = msg;
    this.displayError = true;
  }

  toggleSignUp() {
    this.displayError = false;
    this.errorMsg = '';
    this.newAccount = !this.newAccount;
  }

}
