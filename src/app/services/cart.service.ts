import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Good } from '../interfaces/good';
import { Shopping } from '../interfaces/shopping';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(  private afs:AngularFirestore, private authserv:AuthService ) { }

  addToCart( good:Good )
  {
   return this.afs.collection( `users/${this.authserv.userId}/cart`).add(good)
  }

  getCart()
  {
    return this.afs.collection( `users/${this.authserv.userId}/cart`).snapshotChanges()
  }
  deleteitem( item_id: any )
  {
    return this.afs.doc( `users/${this.authserv.userId}/cart/${item_id}`).delete()
  }
  updateitem( item_id:any , amount :number  )
  {
    return this.afs.doc( `users/${this.authserv.userId}/cart/${item_id}`).update({
      amount
    })
  }
  ordergoods( shopping:Shopping )
  {
    return this.afs.collection( `orders/${this.authserv.useremail}/cart`).add(shopping)
 
  }
}
