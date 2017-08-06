import { AuthProvider } from './auth.provider';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
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

export class AppComponent implements OnInit {
  private loading: boolean;
  public isLoggedIn: boolean;
  public displayName: string;
  public toastConfig: ToasterConfig = new ToasterConfig({
    positionClass: 'toast-top-right',
    timeout: 2000,
    animation: 'fade'
  });

  constructor(public authService: AuthProvider, public router: Router, public dialog: MdDialog) {
    this.isLoggedIn = false;
  }

  ngOnInit() {
    this.loading = true;
    this.authService.af.authState.subscribe(
      (auth) => {
        if (auth == null) {
          this.isLoggedIn = false;
          this.loading = false;
          this.router.navigate(['welcome']);
        }
        else {
          this.isLoggedIn = true;
          this.loading = false;
          this.displayName = auth.displayName;
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
