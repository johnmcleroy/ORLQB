import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { Rollbar } from '@ionic-native/rollbar';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import firebase from 'firebase';

import { HomePage } from '../pages/home/home';
//import { PhotoPage } from '../pages/photo/photo';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  rootPage: any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, rollbar: Rollbar) {

     // Initialize Firebase
  var config = {
      apiKey: "AIzaSyAqCWig0L0spfRpBUsL_VsgwxwSqtKzIPI",
      authDomain: "orlqb.firebaseapp.com",
      databaseURL: "https://orlqb.firebaseio.com",
      projectId: "firebase-orlqb",
      storageBucket: "firebase-orlqb.appspot.com",
      messagingSenderId: "230654055784"
    };
    firebase.initializeApp(config);

  const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
    if (!user) {
      this.rootPage = 'login';
      unsubscribe();

    } else {
      this.rootPage = HomePage;
      unsubscribe();
    }
    
  });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      rollbar.init();
      statusBar.styleDefault();
      splashScreen.hide();

    });

  }
}

