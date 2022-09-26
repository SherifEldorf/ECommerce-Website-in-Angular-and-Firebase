import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  errormessage:string='';
  constructor( private authserv:AuthService ,private us :UserService , private router :Router ) { }

  ngOnInit(): void {
  }
  Signup(form :any)
  {
    let data :User =form.value;
    this.authserv.signup(data.email,data.password).catch((error) => {
      this.errormessage=error;
    }).then(result =>{
      this.errormessage='';
      console.log();
      this.us.addNewUser(this.authserv.userId,data.email,data.address).then(()=>{
        this.router.navigate([''])
      })

    });

    
  }

}
