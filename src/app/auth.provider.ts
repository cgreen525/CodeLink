import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireDatabaseModule, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthProvider {
  public displayName: string;
  public email: string;
  public user: FirebaseObjectObservable<firebase.User>;

  constructor(public af: AngularFireAuth, public db: AngularFireDatabase) {
    this.af.authState.subscribe(
      (Auth) => {
        if (Auth != null) {
          this.user = this.db.object('users/' + Auth.uid);
        }
      });
  }

  /**
   * Logs in the user
   * @returns {firebase.Promise<FirebaseAuthState>}
   */
  loginWithGoogle() {
    return this.af.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

    /**
   * Logs the user in using their Email/Password combo
   * @param email
   * @param password
   * @returns {firebase.Promise<FirebaseAuthState>}
   */
  loginWithEmail(email, password) {
      return this.af.auth.signInWithEmailAndPassword(email, password);
  }

  /**
   *
   * @param model
   * @returns {firebase.Promise<void>}
   */
  registerUser(email, password) {
    return this.af.auth.createUserWithEmailAndPassword(email, password);
  }

  /**
   * Logs out the current user
   */
  logout() {
    return this.af.auth.signOut();
  }

}
