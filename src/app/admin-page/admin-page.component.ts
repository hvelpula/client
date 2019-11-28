import { Component, OnInit, ViewChild } from '@angular/core';
import { BookingsList } from '../model/bookingsList';
import { HttpClient } from '@angular/common/http';
import { HotelService } from '../service/hotel.service';
import { Router } from '@angular/router';
import { Hotel } from '../model/hotel';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  bookings: BookingsList[] = [];
  bookingStatus: BookingsList;
 add:Hotel;
 hotelName:Hotel;
  private baseUrl = 'http://localhost:8080/api';
  hotel:Hotel;
  hotels:Hotel[]=[];

  displayedColumns: string[] = ['bookingId', 'hotelName', 'roomType', 'roomNo', 'price', 'hotelAddress',
   'firstName', 'mobileNo', 'adult', 'child', 'checkIn', 'checkOut','bookingStatus','action1','action2','action3'];
  dataSource ;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private http: HttpClient, private service: HotelService, private router: Router) {
    this.hotel = new Hotel();
    this.bookingStatus = new BookingsList();
  }

  ngOnInit() {
    this.service.getBookingsListByUserName().subscribe(data=> {
    console.log(this.bookings)
    this.bookings= data ;
      this.dataSource = new MatTableDataSource(this.bookings);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        console.log(this.dataSource);
      
      });
      // this.service.getHotels().subscribe(data => {
      //   this.hotels = data;
      //   console.log(this.hotels)
      //   this.dataSource = new MatTableDataSource(this.hotels);
      //   this.dataSource.paginator = this.paginator;
      //   this.dataSource.sort = this.sort;
      //   console.log(this.dataSource);
      // });
  }
  
  getBookingsList() {
       
    this.service.getBookingsListByUserName().subscribe(data => this.bookings = data);
  }
  getHotels(){
    
    this.service.getHotels().subscribe(data=>this.hotels=data);

    console.log(this.hotel);
  }
  removeRoom(bookingId, i) {
    console.log(i)
    console.log(bookingId)
    this.service.removeRoom(bookingId).subscribe();
    this.getBookingsList();
  }

  confirm(bookingId, i) {
    console.log(i)
    console.log(bookingId)
    let bookingStatus = 'Confirmed';
    this.service.updateBookingStatus(bookingStatus, bookingId).subscribe();
  }

  reject(bookingId, i) {
    console.log(i)
    console.log(bookingId)
    let bookingStatus = 'Rejected';
    this.service.updateBookingStatus(bookingStatus, bookingId).subscribe();


  }
 
}
