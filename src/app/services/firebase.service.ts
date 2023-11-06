import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  // private movementURL = environment.urlConfing.MOVEMENTURL;

  constructor(private afs: AngularFirestore) { }

  // async fetchUserInfo2Api(urlType:string,params:any){
  //   let url = await this.utilities.getUrlType(urlType);
  //   let accessToken = credential["token"];
  //   let apiUrl = `${url}/${uid}.json?auth=${accessToken}`;
  //   if (urlType === 4) {
  //       apiUrl = `${url}/movements.json?orderBy="${params['orderBy']}"&equalTo=${params['equalTo']}&auth=${accessToken}`;
  //   }
  //   let json = {}
  //   json = JSON.stringify(json);
  //   return  this.http.get(`${apiUrl}`, json).pipe(map( data => data)).toPromise();
  // }
}
