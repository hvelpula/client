import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotelService } from '../service/hotel.service';
import { SuperAdminLogin } from '../model/superAdminLogin';

@Component({
  selector: 'app-super-admin-login',
  templateUrl: './super-admin-login.component.html',
  styleUrls: ['./super-admin-login.component.css']
})
export class SuperAdminLoginComponent implements OnInit {
  uname: string;
  pwd: string;
  superAdminLogin:SuperAdminLogin;

  constructor(private router:Router, private service:HotelService) { 
    this.superAdminLogin=new SuperAdminLogin();
  }

  ngOnInit() {
  }
  onSubmit(loginform) {
    this.uname= (<HTMLInputElement>document.getElementById('userName')).value;
    this.pwd= (<HTMLInputElement>document.getElementById('password')).value;
    console.log(this.uname);
    console.log(this.pwd)
 this.service.ValidateSuperAdminLogin(this.uname, this.pwd).subscribe(data => {
   if (data){
     sessionStorage.setItem("userName",this.uname);
     this.router.navigate(['/super-admin-page'])
   }
     
   else{
     alert("Not a valid SuperAdmin");
   }
   })
    
  
  }
  }

