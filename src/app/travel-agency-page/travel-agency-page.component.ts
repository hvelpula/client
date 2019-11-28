import { Component, OnInit,  ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TravelAgencyReg } from '../model/travelAgencyReg';
import { TravelAgencyRegService } from '../service/travel-agency-reg.service';
import { BookingsList } from '../model/bookingsList';
import { Hotel } from '../model/hotel';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-travel-agency-page',
  templateUrl: './travel-agency-page.component.html',
  styleUrls: ['./travel-agency-page.component.css']
})
export class TravelAgencyPageComponent implements OnInit {
  bookings:BookingsList[]=[];
  travel: TravelAgencyReg;
  hotels: Hotel[]=[];
  booking:Hotel[]=[];

  displayedColumns: string[] = ['bookingId', 'hotelName', 'roomType', 'roomNo', 'price', 'hotelAddress', 'firstName', 'mobileNo', 'adult', 'child', 'checkIn', 'checkOut','bookingStatus'];
  displayedColumns1: string[]= ['hotelName','hotelAddress', 'username']
  dataSource ;
  book : any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor( private router: Router, private service:TravelAgencyRegService) {
    this.travel=new TravelAgencyReg();
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
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(this.dataSource);
    });
  }
  doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
  getHotels() {
    this.service.getHotels().subscribe(data => this.booking = data);
  }
  getBookingsList() {
       
    this.service.getBookingsList().subscribe(data => this.bookings = data);
  }
  onRegister(register){

    console.log(this.travel)
    this.service.saveHotel(this.travel).subscribe();
    this.service.setDetails(this.travel);
    alert("Registered successfully ");
   this.router.navigate(["travel-bookings"]);
  }
}
