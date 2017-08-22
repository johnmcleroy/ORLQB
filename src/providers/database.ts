import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";
import firebase from 'firebase';


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
	              id        : item.key,
	              members   : item.val().members,
	              origindate: item.val().origindate,
	              duration  : item.val().duration,
	              genres    : item.val().genres,
	              image     : item.val().image,
	              rating    : item.val().rating,
	              summary   : item.val().summary,
	              title     : item.val().title
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
         var updateRef = firebase.database().ref('films').child(id);
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