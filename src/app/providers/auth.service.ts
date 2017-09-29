import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {

  user: Observable<firebase.User>;
  constructor(
    public afAuth: AngularFireAuth
  ) {
    this.user = afAuth.authState;
   }

   loginWithGoogle() {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
   }

   logout() {
    return this.afAuth.auth.signOut();
   }

}
