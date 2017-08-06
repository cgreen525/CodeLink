import { AuthProvider } from './auth.provider';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { MdDialog } from '@angular/material';
import { PostComponent } from './components/postDialog/postDialog.component';
import { ToasterModule, ToasterService, ToasterConfig } from 'angular2-toaster';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public isLoggedIn: boolean;
  public toastConfig: ToasterConfig = new ToasterConfig({
    positionClass: 'toast-top-right',
    timeout: 2000,
    animation: 'fade'
  });

  constructor(public authService: AuthProvider, public router: Router, public dialog: MdDialog) {
    this.authService.af.authState.subscribe(
      (auth) => {
        if (auth == null) {
          console.log('No user signed in');
          this.isLoggedIn = false;
          this.router.navigate(['welcome']);
        }
        // tslint:disable-next-line:one-line
        else {
          console.log(auth.displayName + ' signed in');
          // Set the Display Name and Email so we can attribute messages to them
          if (auth.displayName) {
            this.authService.displayName = auth.displayName;
            this.authService.email = auth.email;
          }
          // tslint:disable-next-line:one-line
          else {
            this.authService.displayName = auth.email;
            this.authService.email = auth.email;
          }
          this.isLoggedIn = true;
          this.router.navigate(['dashboard']);
        }
      }
    );
  }

  logout() {
    this.authService.logout();
  }

  openDialog() {
    this.dialog.open(PostComponent);
  }
}
