import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor( private afs :AngularFirestore )
  {
    
   }

  addNewUser( id:any,email :any ,address :any)
  {
  return this.afs.doc('users/'+id).set({
      email,
      address
    }
    )
  }
}
