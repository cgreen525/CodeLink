import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { RouterModule, Routes} from "@angular/router";
import { AppComponent } from './app.component';
import { AF } from "../providers/af";
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RegistrationComponent } from './registration/registration.component';

export const firebaseConfig = {
  apiKey: "AIzaSyDutfIndhJXIOumqovgQAoRErWZJRbwaLo",
  authDomain: "codelink-c381a.firebaseapp.com",
  databaseURL: "https://codelink-c381a.firebaseio.com",
  storageBucket: "codelink-c381a.appspot.com",
  messagingSenderId: "779242369000"
};

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegistrationComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(routes),
    FormsModule,
    HttpModule
  ],
  providers: [AF],
  bootstrap: [AppComponent]
})
export class AppModule { }
