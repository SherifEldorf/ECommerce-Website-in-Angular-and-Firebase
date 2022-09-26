import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { getAuth } from "firebase/auth";

import * as firebase from 'firebase/compat';
import { observable } from 'rxjs';
import { Form } from '@angular/forms';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isOpen:boolean=false;
  isUser:boolean=false;
   auth :any;
   searchvalue:string='';

   user:any;
  constructor( private authserv:AuthService ,private router:Router )
   {
    }

  ngOnInit(): void {
    this.authserv.user.subscribe(user=>{
      if(user){
        this.isUser=true;
        this.authserv.userId=user.uid;
        this.authserv.useremail=user.email ;

      }else{ this.isUser=false ; this.authserv.userId='' }
    })
   
  }
  toggle_navbar()
  {
    this.isOpen=!this.isOpen;
  }
  logOut()
  {
    this.authserv.logOut().then( ()=>{
      this.router.navigate(['login'])

    } );
  }
  search( searchinput:string )
  {
    this.searchvalue=searchinput;
   if(searchinput){this.authserv.searchvalue=searchinput;} else{this.authserv.searchvalue=''}
  }

}
