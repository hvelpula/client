import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotelService } from '../service/hotel.service';
import { AdminLogin } from '../model/adminLogin';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  uname: string;
  pwd: string;
adminLogin: AdminLogin;
  constructor(private router : Router, private service:HotelService ) { 
this.adminLogin=new AdminLogin();
  }
  ngOnInit() {
  }
  onSubmit(loginform){
    this.uname= (<HTMLInputElement>document.getElementById('userName')).value;
    this.pwd= (<HTMLInputElement>document.getElementById('password')).value;
    console.log(this.adminLogin.userName)
    console.log(this.adminLogin.password)
 this.service.ValidateAdminLogin(this.adminLogin.userName, this.adminLogin.password).subscribe(data => {
   if (data){
     sessionStorage.setItem("userName",this.uname);
     sessionStorage.setItem("pwd",this.pwd);
     this.router.navigate(['/admin-page']);
   }
     
   else{
     alert("Not a valid Admin");
   }
   })

  }
}
