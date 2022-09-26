import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import { getAuth } from "firebase/auth";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isloggedin:boolean =false;
  user;
  userId:string='';
  useremail:any;
  searchvalue:string='';


  constructor( private ofauth :AngularFireAuth ) { 
    this.user=this.ofauth.user
  }
  
  signup( email :any ,password :any )
  {
    return this.ofauth.createUserWithEmailAndPassword(email,password)
  }
  login( email :any , password :any)
  {
      this.isloggedin=true;
    
    return this.ofauth.signInWithEmailAndPassword(email,password)
  }
  
  logOut()
  {
      this.isloggedin=false;
    return this.ofauth.signOut();
  }
 

  

}
