import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AuthProvider } from './auth.provider';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostComponent } from './postDialog/postDialog.component';

export const firebaseConfig = {
  apiKey: 'AIzaSyB87Q12Gq8b-0WZ_hSI7n6fqGxPYt7aUAg',
  authDomain: 'codelink-46eb1.firebaseapp.com',
  databaseURL: 'https://codelink-46eb1.firebaseio.com',
  storageBucket: 'codelink-46eb1.appspot.com',
  messagingSenderId: '131072539325'
};

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: AppComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    MaterialModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthProvider],
  bootstrap: [AppComponent],
  entryComponents: [PostComponent]
})

export class AppModule { }
