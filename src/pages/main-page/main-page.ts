import { Component } from '@angular/core/';
import { NavController, Platform } from 'ionic-angular';
import { NeedridePage } from '../needride/needride';
import { ProtocolsPage } from '../protocols/protocols';
import { KeymanPage } from '../keyman/keyman';
import { GovernorPage } from '../governor/governor';

import { GoogleMaps, GoogleMap, GoogleMapOptions, GoogleMapsEvent, LatLng, CameraPosition, MarkerOptions, Marker } from '@ionic-native/google-maps';

@Component({
  selector: 'page-main-page',
  templateUrl: 'main-page.html'
})
export class MainPage {

  map: GoogleMap;
  maps: GoogleMaps;
  mapElement: HTMLElement;

  constructor(public navCtrl: NavController, 
              public platform: Platform,
              private googleMaps: GoogleMaps ) {

    //Wait until the native plugin is ready
    platform.ready().then(() => {
      this.goLoadMap();
    });
  }

  goToNeedRide(){ 
  	this.navCtrl.push(NeedridePage); 
  }

  goToProtocols(){
  	this.navCtrl.push(ProtocolsPage);
  }

  playAudio(){

  }

  goToKeyman(){
  	this.navCtrl.push(KeymanPage);
  }

  goToGovernor(){
    this.navCtrl.push(GovernorPage);
  }

  goLoadMap() {

        this.mapElement = document.getElementById('map');

    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: 43.0741904,
          lng: -89.3809802
        },
        zoom: 18,
        tilt: 30
      }
    };

  this.map = this.googleMaps.create(this.mapElement, mapOptions);

    // Wait the MAP_READY before using any methods.
    this.map.on(GoogleMapsEvent.MAP_READY).subscribe(()=> {
        console.log('Map is ready!');

        // Now you can use all methods safely.
        this.map.addMarker({
            title: 'Ionic',
            icon: 'blue',
            animation: 'DROP',
            position: {
              lat: 43.0741904,
              lng: -89.3809802
            }
          })
          .then(marker => {
            marker.on(GoogleMapsEvent.MARKER_CLICK)
              .subscribe(() => {
                alert('clicked');
              });
          });

      });
    }
  }
