import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import * as firebase from 'firebase';

import { HomePage } from '../pages/home/home';
import { MainPage } from '../pages/main-page/main-page';
import { MainTabsControllerPage } from '../pages/main-tabs-controller/main-tabs-controller';
import { NeedridePage } from '../pages/needride/needride';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  rootPage: any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {

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

    } else { //there is a user and so we let them into the app
      //this.rootPage = HomePage;  IONIC USES 'HomePage' as its semantic name for a templated root page
        this.rootPage = MainTabsControllerPage;

      unsubscribe();
    }
    
  });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

    });

  }
}

