import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { getAuth } from "firebase/auth";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  auth :any;

  user:any;
  @Input() isloggedin :boolean =false;

  constructor( private authserv:AuthService ,private router:Router ) { }

  ngOnInit(): void {
  }
  login( email :any,password:any  )
  {
    
    this.authserv.login(email,password).then(()=>{
      this.router.navigate(['']);
      this.auth = getAuth();
      this.user=this.auth.currentUser
      console.log(this.user)
    }
    
    
    ).catch(error=>console.log(error))

  }

}
