import { Component, OnInit } from '@angular/core';
import { Hotel } from '../model/hotel';
import { HotelService } from '../service/hotel.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {
  hotelId: Hotel;
   booking:Hotel[]=[];
  constructor(private router:Router,private Service:HotelService) { }

  ngOnInit() {
    
  }

 
  
}
