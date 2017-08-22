import { Injectable } from '@angular/core';
import firebase from 'firebase';

@Injectable()
export class AuthProvider {

	public fireAuth: firebase.auth.Auth; //holds the authentication object
	public userProfileRef: firebase.database.Reference; //points a Reference to the databse node /userProfile/

  constructor() {
  	this.fireAuth = firebase.auth();
  	this.userProfileRef = firebase.database().ref('/userProfile');

    //console.log('Hello from the AuthProvider Provider.')
  }

    private email: string;
  	private password: string;

  	loginUser(email, password): firebase.Promise<any> {
  		return this.fireAuth.signInWithEmailAndPassword(email, password)   
  	}

  	signupUser(email, password): firebase.Promise<any> {
  		return this.fireAuth.createUserWithEmailAndPassword(email, password)
  		.then ( newUser => {
  			this.userProfileRef.child(newUser.uid).set({
  				email: email
  			}); //this becomes the reference to the userProfile node inside our database
  		});
  	}

  	resetPassword(email, password): firebase.Promise<void> {
  		return this.fireAuth.sendPasswordResetEmail(email);
  	}

  	logoutUser(): firebase.Promise<void> {
  		this.userProfileRef.child(this.fireAuth.currentUser.uid).off();
  		return this.fireAuth.signOut();
  	}

}
