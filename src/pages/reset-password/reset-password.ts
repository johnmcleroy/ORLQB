import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth';
import { EmailValidator } from '../../validators/email';


@IonicPage({
	name: 'reset-password'
})

@Component({
  selector: 'page-reset-password',
  templateUrl: 'reset-password.html',
})

export class ResetPasswordPage {
	public resetPasswordForm: FormGroup;


  constructor(public navCtrl: NavController, 
  	public authProvider: AuthProvider, 
  	public formBuilder: FormBuilder, 
  	public alertCtrl: AlertController) {

	this.resetPasswordForm = formBuilder.group({
		email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
	});
   }

 resetPassword(){

 	if (!this.resetPasswordForm.valid){
 		console.log(this.resetPasswordForm.value);
 	} else {
 		this.authProvider.resetPassword
 		}
 };	


  ionViewDidLoad() {
    console.log('ionViewDidLoad ResetPasswordPage');
  }

}

