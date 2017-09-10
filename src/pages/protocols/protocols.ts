import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GoneWestPage } from '../gone-west/gone-west';
import { SponsorshipPage } from '../sponsorship/sponsorship';
import { HistorianPage } from '../historian/historian';
import { ScribePage } from '../scribe/scribe';
import { KeymanPage } from '../keyman/keyman';
import { GovernorPage } from '../governor/governor';

@Component({
  selector: 'page-protocols',
  templateUrl: 'protocols.html'
})
export class ProtocolsPage {

  constructor(public navCtrl: NavController) {
  }
  goToGoneWest(params){
    if (!params) params = {};
    this.navCtrl.push(GoneWestPage);
  }goToSponsorship(params){
    if (!params) params = {};
    this.navCtrl.push(SponsorshipPage);
  }goToHistorian(params){
    if (!params) params = {};
    this.navCtrl.push(HistorianPage);
  }goToScribe(params){
    if (!params) params = {};
    this.navCtrl.push(ScribePage);
  }goToKeyman(params){
    if (!params) params = {};
    this.navCtrl.push(KeymanPage);
  }goToGovernor(params){
    if (!params) params = {};
    this.navCtrl.push(GovernorPage);
  }
}
