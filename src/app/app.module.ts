import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToasterModule } from 'angular2-toaster';

import { AuthProvider } from './auth.provider';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landingPage/landingPage.componoent';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PostComponent } from './components/postDialog/postDialog.component';
import { ViewPostsComponent } from './components/viewPosts/viewPosts.component';
import { ListingService } from './services/Listing.service';

export const firebaseConfig = {
  apiKey: 'AIzaSyB87Q12Gq8b-0WZ_hSI7n6fqGxPYt7aUAg',
  authDomain: 'codelink-46eb1.firebaseapp.com',
  databaseURL: 'https://codelink-46eb1.firebaseio.com',
  storageBucket: 'codelink-46eb1.appspot.com',
  messagingSenderId: '131072539325'
};

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: AppComponent },
  { path: 'welcome', component: LandingPageComponent},
  { path: 'register', component: LandingPageComponent },
  { path: 'browse', component: ViewPostsComponent },
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LoginComponent,
    DashboardComponent,
    PostComponent,
    ViewPostsComponent
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
    RouterModule.forRoot(routes),
    ToasterModule
  ],
  providers: [
    AuthProvider,
    ListingService
  ],
  bootstrap: [
    AppComponent
  ],
  entryComponents: [
    LandingPageComponent, 
    DashboardComponent, 
    PostComponent, 
    ViewPostsComponent, 
    LoginComponent
  ]
})

export class AppModule { }
