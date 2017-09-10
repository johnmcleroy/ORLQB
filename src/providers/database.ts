import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";
import * as firebase from 'firebase';


@Injectable()
export class DatabaseProvider {

   constructor(public http: Http)
   {
   }



   renderMembers() : Observable<any>
   {

      return new Observable(observer =>
      {
         let members: any = [];
         firebase.database().ref('members').orderByKey().once('value', (items : any) =>
         {
            items.forEach((item) =>
            {
               members.push({
	              /*id        : item.key,
	              members   : item.val().members,
	              origindate: item.val().origindate,
	              duration  : item.val().duration,
	              genres    : item.val().genres,
	              image     : item.val().image,
	              rating    : item.val().rating,
	              summary   : item.val().summary,
	              title     : item.val().title
                 */
                 id        : item.key,
                 category  : item.val().Category,
                 notes     : item.val().Notes,
                 phone1    : item.val().Phone1,
                 phone1Type: item.val().Phone1Type,
                 phone2    : item.val().Phone2,
                 phone2Type: item.val().Phone2Type,
                 bDay      : item.val().bDay,
                 displayName: item.val().displayName,
                 eMail1    : item.val().eMail1,
                 eMail2    : item.val().eMail2,
                 emerCtc   : item.val().emercontact,
                 fName     : item.val().firstName,
                 hCity     : item.val().homeCity,
                 hCountry  : item.val().homeCountry,
                 hPostCode : item.val().homePostalCode,
                 hState    : item.val().homeState,
                 hStreet1  : item.val().homeStreet,
                 hStreet2  : item.val().homeStreet2,
                 hStreet3  : item.val().homeStreet3,
                 initdate  : item.val().initDate,
                 hangar    : item.val().memberHangar,
                 photo     : item.val().memberPhoto,
                 nickName  : item.val().nickName,
                 prefEmail : item.val().prefEmail,
                 qbNum     : item.val().qbNumber,
                 qbStat    : item.val().qbStatus
	           });
            });

            observer.next(members);
            observer.complete();
         },
         (error) =>
         {
            console.log("Observer error: ", error);
            console.dir(error);
            observer.error(error)
         });

      });
   }



   deleteMember(id) : Promise<any>
   {
      return new Promise((resolve) =>
      {
         let ref = firebase.database().ref('members').child(id);
         ref.remove();
         resolve(true);
      });
   }



   addToDatabase(memberObj) : Promise<any>
   {
      return new Promise((resolve) =>
      {
         let addRef = firebase.database().ref('members');
         addRef.push(memberObj);
         resolve(true);
      });
   }



   updateDatabase(id, memberObj) : Promise<any>
   {
      return new Promise((resolve) =>
      {
         var updateRef = firebase.database().ref('members').child(id);
	      updateRef.update(memberObj);
         resolve(true);
      });
   }



   uploadImage(imageString) : Promise<any>
   {
      let image       : string  = 'member-' + new Date().getTime() + '.jpg',
          storageRef  : any,
          parseUpload : any;

      return new Promise((resolve, reject) =>
      {
         storageRef       = firebase.storage().ref('photos/' + image);
         parseUpload      = storageRef.putString(imageString, 'data_url');

         parseUpload.on('state_changed', (_snapshot) =>
         {
            // We could log the progress here IF necessary
            // console.log('snapshot progess ' + _snapshot);
         },
         (_err) =>
         {
            reject(_err);
         },
         (success) =>
         {
            resolve(parseUpload.snapshot);
         });
      });
   }


}