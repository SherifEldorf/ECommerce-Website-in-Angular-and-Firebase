import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { map, Observable } from 'rxjs';
import { Good } from '../interfaces/good';

@Injectable({
  providedIn: 'root'
})
export class GoodsService {

  datasource:any;
  constructor( private afs :AngularFirestore ,private fstorage :AngularFireStorage )
   {
    }
    getAllGoods()
    {
      return this.afs.collection('goods').snapshotChanges();

    }

    addNewGood( name :string  , price:number,image:File )
    {
      let ref =this.fstorage.ref('goods/'+image.name);
      ref.put(image).then(()=>{
        ref.getDownloadURL().subscribe(photourl=>{
          this.afs.collection('goods').add({
            name,
            price,
            photourl
          })
        })
      })
    }
  
 
  
}
