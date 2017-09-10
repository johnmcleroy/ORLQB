/*user.ts
members:[
	{uid: 0, {
		 Category: "QB"
		 Notes: ""
		 Phone1: "803-517-6760"
		 Phone1Type: "Cellular"
		 Phone2: ""
		 Phone2Type: ""
		 bDay: ""
		 displayName: ""
		 eMail1: "Gooseguider@gmail.com"
		 eMail2: ""
		 emerContact: ""
		 firstName: "W. Kyle"
		 homeCity: ""
		 homeCountry: ""
		 homePostalCode: ""
		 homeState: ""
		 homeStreet: ""
		 homeStreet2: ""
		 homeStreet3: ""
		 initDate:""
		 lastName: "Adams"
		 memberHangar: "CLT"
		 memberPhoto: ""
		 nickName: ""
		 prefEmail: ""
		 qbNumber: ""
		 qbStatus: ""
		 }
	 }
 ]

		------------------------------
var user = firebase.auth().currentUser;
var name, email, photoUrl, uid, emailVerified;

if (user != null) {
  name = user.displayName;
  email = user.email;
  photoUrl = user.photoURL;
  emailVerified = user.emailVerified;
  uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
                   // this value to authenticate with your backend server, if
                   // you have one. Use User.getToken() instead.
}


*/
