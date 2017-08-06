import { Observable } from 'rxjs/Rx';
import { Injectable, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireDatabaseModule, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthProvider implements OnInit {
  public isLoggedIn: boolean;
  public displayName: string;
  public email: string;
  public user: FirebaseObjectObservable<firebase.User>;

  constructor(public af: AngularFireAuth, private db: AngularFireDatabase) {
    this.isLoggedIn = false;
    this.af.authState.subscribe(
      (Auth) => {
        if (Auth != null) {
          this.user = this.db.object('users/' + Auth.uid);
          this.displayName = Auth.displayName;
          this.email = Auth.email;
          this.isLoggedIn = true;
        }
      });
  }

  ngOnInit() { }

  loginWithGoogle() {
    return this.af.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  loginWithEmail(email, password) {
      return this.af.auth.signInWithEmailAndPassword(email, password);
  }

  registerUser(email, password) {
    return this.af.auth.createUserWithEmailAndPassword(email, password);
  }

  logout() {
    return this.af.auth.signOut();
  }

}
