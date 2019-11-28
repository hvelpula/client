import { Component, OnInit, ViewChild } from '@angular/core';
import { Hotel } from '../model/hotel';
import { HotelService } from '../service/hotel.service';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-hotels-list',
  templateUrl: './hotels-list.component.html',
  styleUrls: ['./hotels-list.component.css']
})
export class HotelsListComponent implements OnInit {
// list:Hotel;
hotel:Hotel;
// hotels:Hotel;
// hotels : Hotel[]=[];
hotels: any;

list;


displayedColumns: string[] = ['hotelId', 'hotelName', 'roomType', 'roomNo', 'price', 'hotelAddress', 'username'];
  dataSource ;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private service:HotelService) {
    this.hotel=new Hotel();
   }

  doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
  ngOnInit() {
    // this.getHotels();
    this.service.getHotels().subscribe(data => {
      this.hotels = data;
      this.dataSource = new MatTableDataSource(this.hotels);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(this.dataSource);
    });
//     this.hotel=data
//     this.hotels = new MatTableDataSource(this.hotel);
//     this.hotels.paginator = this.paginator;
//     this.hotels.sort = this.sort;
//     console.log(this.hotels);
// });
  }
  getHotels(){
    console.log()
    this.service.getHotels().subscribe(data=>this.hotels=data);

    console.log(this.hotel);
  }
  saveHotel(hotel:Hotel){
    this.list.hotelId=hotel.hotelId;
   this.list.hotelName=hotel.hotelName;
    this.list.roomType=hotel.roomType;
    this.list.roomNo=hotel.roomNo;
    this.list.price=hotel.price;
    this.list.hotelAddress=hotel.hotelAddress;
    this.list.username=hotel.username;
    console.log(this.list)
    this.service.save(this.list).subscribe();
    
  }
}
