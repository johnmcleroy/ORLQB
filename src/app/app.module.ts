import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Diagnostic } from 'ionic-native';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { File } from '@ionic-native/file';
import { Transfer } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Rollbar } from '@ionic-native/rollbar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PhotoPage } from '../pages/photo/photo';

import { DatabaseProvider } from '../providers/database';
import { PreloaderProvider } from '../providers/preloader';
import { AuthProvider } from '../providers/auth/auth';
import { EventProvider } from '../providers/event/event';
import { ProfileProvider } from '../providers/profile/profile';


class CameraMock extends Camera {
getPicture(options){
return new Promise( (resolve, reject) => {
resolve(`TWFuIGlzIGRpc3Rpbmd1aXNoZWQsIG5vdCBvbmx5IGJ5IGhpcyByZWFzb24sIG
J1dCBieSB0aGlzIHNpbmd1bGFyIHBhc3Npb24gZnJvbSBvdGhlciBhbmltYWxzLCB3a
GljaCBpcyBhIGx1c3Qgb2YgdGhlIG1pbmQsIHRoYXQgYnkgYSBwZXJzZXZlcmFuY2Ug
b2YgZGVsaWdodCBpbiB0aGUgY29udGludWVkIGFuZCBpbmRlZmF0aWdhYmxlIGdlbmV
yYXRpb24gb2Yga25vd2xlZGdlLCBleGNlZWRzIHRoZSBzaG9ydCB2ZWhlbWVuY2Ugb2
YgYW55IGNhcm5hbCBwbGVhc3VyZS4=`);
});
}
}


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PhotoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PhotoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: Camera, useClass: CameraMock},
    //Camera,
    DatabaseProvider,
    PreloaderProvider,
    AuthProvider,
    EventProvider,
    ProfileProvider,
    Rollbar,
    File,
    Transfer,
    FilePath,
    Camera
  ]
})
export class AppModule {}
