import { Component, OnInit, ViewChild } from '@angular/core';
import { Hotel } from '../model/hotel';
import { BookingsList } from '../model/bookingsList';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HotelService } from '../service/hotel.service';
import { Router } from '@angular/router';
import { TravelAgencyLogin } from '../model/travelAgencyLogin';
import { TravelAgencyRegService } from '../service/travel-agency-reg.service';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-super-admin-page',
  templateUrl: './super-admin-page.component.html',
  styleUrls: ['./super-admin-page.component.css']
})
export class SuperAdminPageComponent implements OnInit {

  bookingId: BookingsList;
  // bookings:BookingsList[]=[];
  bookingStatus:BookingsList;
  bookings:BookingsList[]=[];
  private baseUrl = 'http://localhost:8080/api';
  hotel: Hotel;
  list:Hotel;
  travelAgencyLogin:TravelAgencyLogin;
  hotels:any;
  
  displayedColumns: string[] = ['bookingId', 'hotelName', 'roomType', 'roomNo', 'price', 'hotelAddress', 'firstName', 'mobileNo', 'adult', 'child', 'checkIn', 'checkOut','bookingStatus'];
  displayedColumns1: string[]= ['hotelName','hotelAddress', 'username','action']
  dataSource ;
  book : any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild('paginator2', { read: MatPaginator }) paginator2:MatPaginator; 
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('sort1') sort1:MatSort;

  constructor(private http: HttpClient,private service:HotelService,private router:Router, private travelAgencyService:TravelAgencyRegService) {
    this.hotel= new Hotel();
    this.travelAgencyLogin=new TravelAgencyLogin();
    this.bookingId= new BookingsList();
    this.bookingStatus=new BookingsList();

   }
  
  ngOnInit() {
    this.service.getBookingsList().subscribe(data => {
    this.bookings= data ;
    this.book = new MatTableDataSource(this.bookings);
      this.book.paginator = this.paginator;
      this.book.sort = this.sort;
      console.log(this.book);
    });
    this.service.getHotels().subscribe(data => {
    this.hotels= data ;
    this.dataSource = new MatTableDataSource(this.hotels);
      this.dataSource.paginator = this.paginator2;
      this.dataSource.sort = this.sort1;
      console.log(this.dataSource);
    });
  }

  doFilter = (value: string) => {
    this.book.filter = value.trim().toLocaleLowerCase();
  }
  doFilter1 = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
   
  onSubmit(submitform){
  console.log(this.hotel)
    this.service.save(this.hotel).subscribe();
    alert("Added successfully ");
}
  // getBookingsList() {
       
  //     this.service.getBookingsList().subscribe(data => this.bookings = data);
  //   }
    getHotels(){
      console.log()
      this.service.getHotels().subscribe(data=>this.hotels=data);
  
      console.log(this.hotel);
    }
    removeHotel(hotelId){
      console.log(hotelId)
      this.service.removeHotel(hotelId).subscribe();
      this.getHotels();
  
    }
  
  onRegister(registerform){
    this.travelAgencyService.addTravelAdmin(this.travelAgencyLogin).subscribe();

    alert("Registerd Successfully and details sent to your registered mobile number");
  }
  // saveHotel(hotel:Hotel){
  //  this.list.hotelName=hotel.hotelName;
  //  this.list.hotelAddress=hotel.hotelAddress;
  //   this.list.username=hotel.username;
  //   console.log(this.list)
  //   this.service.save(this.list).subscribe();
    
  // }
}
