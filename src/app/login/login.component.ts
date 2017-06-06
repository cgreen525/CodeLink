import { AuthProvider } from './../auth.provider';
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

  constructor(public authService: AuthProvider, private router: Router) {
    this.user = authService.user;
    // tslint:disable:quotemark
    this.email = "";
    this.password = "";
  }

  loginWithGoogle() {
    this.authService.loginWithGoogle().then(
      function(response) {
        console.log("Success");
      },
      function(err){
        console.log(err.message);
      }
    );
  }

  loginWithEmail() {
    this.authService.loginWithEmail(this.email, this.password).then(
      function(response){
        console.log("Success");
      },
      function(err){
        console.log(err);
      }
    );
  }

}
