import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
//import { Diagnostic } from 'ionic-native';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { File } from '@ionic-native/file';
import { Transfer } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Calendar } from '@ionic-native/calendar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PhotoPage } from '../pages/photo/photo';
import { MainPage } from '../pages/main-page/main-page';
import { MainTabsControllerPage } from '../pages/main-tabs-controller/main-tabs-controller';
import { HangarMeetingsPage } from '../pages/hangar-meetings/hangar-meetings';
import { SpecialEventsPage } from '../pages/special-events/special-events';
import { ProtocolsPage } from '../pages/protocols/protocols';
import { AdministrationKeyGovPage } from '../pages/administration-key-gov/administration-key-gov';
import { NeedridePage } from '../pages/needride/needride';
import { KeymanPage } from '../pages/keyman/keyman';
import { GovernorPage } from '../pages/governor/governor';


import { DatabaseProvider } from '../providers/database';
import { PreloaderProvider } from '../providers/preloader';
import { AuthProvider } from '../providers/auth/auth';
import { EventProvider } from '../providers/event/event';
import { ProfileProvider } from '../providers/profile/profile';

import { GoogleMaps,
         GoogleMapsEvent,
         GoogleMapOptions,
         CameraPosition,
         MarkerOptions,
         Marker } from '@ionic-native/google-maps';
import { YtProvider } from '../providers/yt/yt';


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
    PhotoPage,
    MainPage,
    MainTabsControllerPage,
    HangarMeetingsPage,
    SpecialEventsPage,
    ProtocolsPage,
    AdministrationKeyGovPage,
    NeedridePage,
    KeymanPage,
    GovernorPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PhotoPage,
    MainPage,
    MainTabsControllerPage,
    HangarMeetingsPage,
    SpecialEventsPage,
    ProtocolsPage,
    AdministrationKeyGovPage,
    NeedridePage,
    KeymanPage,
    GovernorPage
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
    File,
    Transfer,
    FilePath,
    Calendar,
    YtProvider,
    GoogleMaps
  ]
})
export class AppModule {}
