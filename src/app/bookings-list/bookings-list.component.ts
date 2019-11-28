import { Component, OnInit, ViewChild } from '@angular/core';
import { HotelService } from '../service/hotel.service';
import { Router } from '@angular/router';
import { BookingsList } from '../model/bookingsList';
import { TravelAgencyReg } from '../model/travelAgencyReg';
import { Hotel } from '../model/hotel';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-bookings-list',
  templateUrl: './bookings-list.component.html',
  styleUrls: ['./bookings-list.component.css']
})
export class BookingsListComponent implements OnInit {
  
  book:BookingsList;
  bookings:BookingsList[]=[];
  details:TravelAgencyReg;
  hotels:Hotel[]=[];
  hotel:Hotel;

  displayedColumns: string[] = ['hotelId', 'hotelName', 'roomType', 'roomNo', 'price', 'hotelAddress','firstName','lastName', 
  'email','mobileNo','city','district','state','location','adult','child','checkIn','checkOut','address','bookingStatus'];
   dataSource ;
   @ViewChild(MatPaginator) paginator: MatPaginator;
   @ViewChild(MatSort) sort: MatSort;
  constructor(private router:Router,private service:HotelService) {
    this.book=new BookingsList();
    this.details=new TravelAgencyReg();
   }
   doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
   
 
  ngOnInit() {
    this.service.getBookingsList().subscribe(data => {
    this.bookings= data ;
    this.dataSource = new MatTableDataSource(this.bookings);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(this.dataSource);
    });
    this.service.getHotels().subscribe(data => {
      this.hotels = data;
      this.dataSource = new MatTableDataSource(this.hotels);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(this.dataSource);
    });
  }
  getBookingsList() {
       
    this.service.getBookingsListByUserName().subscribe(data => this.bookings = data);
  }
  getHotels(){
    
    this.service.getHotels().subscribe(data=>this.hotels=data);

    console.log(this.hotel);
  }
  bookHotel(hotel:Hotel){
    console.log(this.details)
    console.log(hotel.hotelName)
    this.book.hotelName=hotel.hotelName;
    this.book.roomType=hotel.roomType;
    this.book.roomNo=hotel.roomNo;
    this.book.price=hotel.price;
    this.book.hotelAddress=hotel.hotelAddress;
    this.book.firstName=this.details.firstName;
    this.book.lastName=this.details.lastName;
    this.book.mobileNo=this.details.mobileNo;
    this.book.email=this.details.email;
    this.book.city=this.details.city;
    this.book.district=this.details.district;
    this.book.state=this.details.state;
    this.book.checkIn=this.details.checkIn;
    this.book.checkOut=this.details.checkOut;
    this.book.adult=this.details.adult;
    this.book.child=this.details.child;
    this.book.address=this.details.address;
    this.book.location=this.details.location;
    this.book.bookingStatus='Pending';
    console.log(this.book)
    this.service.book(this.book).subscribe();
    
  }
}
