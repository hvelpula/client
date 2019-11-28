import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TravelAgencyLogin } from '../model/travelAgencyLogin';
import { HotelService } from '../service/hotel.service';

@Component({
  selector: 'app-travel-agency-login',
  templateUrl: './travel-agency-login.component.html',
  styleUrls: ['./travel-agency-login.component.css']
})
export class TravelAgencyLoginComponent implements OnInit {
  travelAgencyLogin:TravelAgencyLogin;
  userName;
  password;
  uname: string;
  pwd: string;
  constructor(private router: Router,private service:HotelService ) { 
    this.travelAgencyLogin = new TravelAgencyLogin();

  }

  ngOnInit() {
  }
  onSubmit(loginform){
    this.uname= (<HTMLInputElement>document.getElementById('userName')).value;
       this.pwd= (<HTMLInputElement>document.getElementById('password')).value;
       console.log(this.travelAgencyLogin.userName)
       console.log(this.travelAgencyLogin.password)
    this.service.ValidateTravelLogin(this.uname,this.pwd).subscribe(data => {
      if (data){
        sessionStorage.setItem("userName",this.uname);
        this.router.navigate(['/travel-agency-page']);
      }
        
      else{
        alert("Not a valid TravelAdmin");
      }

    })
  
    
}
}
