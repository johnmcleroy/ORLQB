import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Calendar } from '@ionic-native/calendar';
import { MeetingDetailsPage } from '../meeting-details/meeting-details';

@Component({
  selector: 'page-hangar-meetings',
  templateUrl: 'hangar-meetings.html'
})
export class HangarMeetingsPage {

  public title: string;
  public note: string;
  public startDate: Date;
  public endDate: Date;
  public titleUpdated: string;
  public noteUpdated: string;

  constructor(public navCtrl: NavController, private calendar: Calendar) {

	this.title = 'Event 1';
    this.note = 'Creating an event !';
    this.startDate = new Date();
    this.startDate.setMinutes(this.startDate.getMinutes() + 10);
    this.endDate = new Date();
    this.endDate.setHours(this.startDate.getHours() + 1);

    this.titleUpdated = 'Event updated';
    this.noteUpdated = 'We update the event !';

  }
  goToMeetingDetails(params){
    if (!params) params = {};
    this.navCtrl.push(MeetingDetailsPage);
  }

  openCalendar1(){
  	this.calendar.openCalendar(new Date()).then(
  		(msg) => { console.log(msg); },
  		(err) => { console.log(err); }
	);
	
  }

  openCalendar2(){
    this.calendar.openCalendar(this.startDate);
  }
}
