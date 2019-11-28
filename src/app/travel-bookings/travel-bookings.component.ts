import { Component, OnInit, ViewChild } from '@angular/core';
import { Hotel } from '../model/hotel';
import { Router } from '@angular/router';
import { HotelService } from '../service/hotel.service';
import { BookingsList } from '../model/bookingsList';
import { TravelAgencyReg } from '../model/travelAgencyReg';
import { TravelAgencyRegService } from '../service/travel-agency-reg.service';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-travel-bookings',
  templateUrl: './travel-bookings.component.html',
  styleUrls: ['./travel-bookings.component.css']
})
export class TravelBookingsComponent implements OnInit {

  details: TravelAgencyReg;
  booking: Hotel[];
  hotels: Hotel[] = [];
  //list: BookingsList;
  bookings: BookingsList[] = [];
  hotel:Hotel;
  list:any;

  displayedColumns: string[] = ['hotelName', 'roomType', 'roomNo', 'price', 'hotelAddress', 'action'];
  dataSource;
  book: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private router: Router, private service: HotelService, private travelService: TravelAgencyRegService) {
    this.list = new BookingsList();
    this.details = new TravelAgencyReg();
    this.hotel = new Hotel();
  }
  doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
  ngOnInit() {
    this.details = this.travelService.getDetails();
    this.service.getHotels().subscribe(data => {
      this.hotels = data;
      this.dataSource = new MatTableDataSource(this.hotels);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(this.dataSource);
    });

  }
  getHotels() {
    this.service.getHotels().subscribe(data => this.booking = data);
  }

  bookHotel(hotel, i) {

    console.log(this.details)
    console.log(hotel.hotelName)

    this.list.hotelName = hotel.hotelName;
    this.list.roomType = hotel.roomType;
    this.list.roomNo = hotel.roomNo;
    this.list.price = hotel.price;
    this.list.hotelAddress = hotel.hotelAddress;
    this.list.firstName = this.details.firstName;
    this.list.lastName = this.details.lastName;
    this.list.mobileNo = this.details.mobileNo;
    this.list.email = this.details.email;
    this.list.city = this.details.city;
    this.list.district = this.details.district;
    this.list.state = this.details.state;
    this.list.checkIn = this.details.checkIn;
    this.list.checkOut = this.details.checkOut;
    this.list.adult = this.details.adult;
    this.list.child = this.details.child;
    this.list.address = this.details.address;
    this.list.location = this.details.location;
    this.list.bookingStatus = 'Pending';
    console.log(i)
    console.log(this.hotel)
    this.service.book(this.list).subscribe();

    alert("Request sent to admin Successfully.....wait for the response");

  }


}
