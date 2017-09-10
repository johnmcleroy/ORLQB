import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GoneWestPage } from '../gone-west/gone-west';
import { SponsorshipPage } from '../sponsorship/sponsorship';
import { HistorianPage } from '../historian/historian';
import { ScribePage } from '../scribe/scribe';
import { KeymanPage } from '../keyman/keyman';
import { GovernorPage } from '../governor/governor';
import { MeetingDetailsPage } from '../meeting-details/meeting-details';
import { MainPage } from '../main-page/main-page';
import { HangarMeetingsPage } from '../hangar-meetings/hangar-meetings';
import { SpecialEventsPage } from '../special-events/special-events';
import { ProtocolsPage } from '../protocols/protocols';
import { AdministrationKeyGovPage } from '../administration-key-gov/administration-key-gov';

@Component({
  selector: 'page-main-tabs-controller',
  templateUrl: 'main-tabs-controller.html'
})
export class MainTabsControllerPage {

  tab1Root: any = MainPage;
  tab2Root: any = HangarMeetingsPage;
  tab3Root: any = SpecialEventsPage;
  tab4Root: any = ProtocolsPage;
  tab5Root: any = AdministrationKeyGovPage;
  constructor(public navCtrl: NavController) {
  }
  goToProtocols(params){
    if (!params) params = {};
    this.navCtrl.push(ProtocolsPage);
  }goToGoneWest(params){
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
  }goToAdministrationKeyGov(params){
    if (!params) params = {};
    this.navCtrl.push(AdministrationKeyGovPage);
  }goToSpecialEvents(params){
    if (!params) params = {};
    this.navCtrl.push(SpecialEventsPage);
  }goToHangarMeetings(params){
    if (!params) params = {};
    this.navCtrl.push(HangarMeetingsPage);
  }goToMeetingDetails(params){
    if (!params) params = {};
    this.navCtrl.push(MeetingDetailsPage);
  }
}
