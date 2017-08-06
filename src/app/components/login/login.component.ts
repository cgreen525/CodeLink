import { Component, OnInit, HostBinding } from '@angular/core';
import { MaterialModule, MdDialog, MdDialogRef } from '@angular/material';
import { ToasterModule, ToasterService, ToasterConfig } from 'angular2-toaster';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
//services
import { AuthProvider } from './../../auth.provider';

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

  constructor(private authService: AuthProvider, 
    private toasterService: ToasterService, 
    public dialogRef: MdDialogRef<LoginComponent>) 
  {
    this.user = authService.user;
    this.email = '';
    this.password = '';
    this.errorMsg = '';
  }

  loginWithGoogle() {
    this.authService.loginWithGoogle().then(
      (response) => {
        this.createSuccessToast();
        this.dialogRef.close();
      },
      (err) => {
        this.createErrorToast(err.message);
      }
    );
  }

  loginWithEmail() {
    this.authService.loginWithEmail(this.email, this.password).then(
      (response) => {
        this.createSuccessToast();
        this.dialogRef.close();
      },
      (err) => {
        this.createErrorToast(err.message);
      }
    );
  }

  // createAccount() {
  //   this.authService.registerUser(this.email, this.password).then(
  //     (response) => {
  //       console.log('Success');
  //     },
  //     (err) => {
  //       console.log(err);
  //     }
  //   );
  // }

  createErrorToast(message) {
    const toast = {
      type: 'error',
      body: message
    }

    this.toasterService.pop(toast);
  }

  createSuccessToast() {
    const toast = {
      type: 'success',
      body: 'Successfully logged in'
    }

    this.toasterService.pop(toast);
  }

}
