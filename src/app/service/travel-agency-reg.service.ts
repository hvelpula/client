import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TravelAgencyReg } from '../model/travelAgencyReg';
import { Observable } from 'rxjs';
import { BookingsList } from '../model/bookingsList';
import { TravelAgencyLogin } from '../model/travelAgencyLogin';

@Injectable({
  providedIn: 'root'
})
export class TravelAgencyRegService {
  
  travelAgencyReg : any;
  details:TravelAgencyReg;
  
  private baseUrl = 'http://localhost:8080/api';
  constructor(private http: HttpClient) { }

  saveHotel(travel: TravelAgencyReg) {
    console.log("add")
    return this.http.post(`${this.baseUrl}` + `/roomBooking`, travel);
    
  }
  setDetails(details:TravelAgencyReg){
    this.details=details;
  }
  getDetails(){
    return this.details;
  }
  getHotels():any {
    return this.http.get(`${this.baseUrl}` + `/getHotels`);
  }

  bookHotel(list : BookingsList){
    console.log("add")
    return this.http.post(`${this.baseUrl}` + `/addBookings`, list);

  }
  addTravelAdmin(travelAdmin : TravelAgencyLogin){
    console.log("add")
    return this.http.post(`${this.baseUrl}` + `/travelagencypage`, travelAdmin);

  }
  getBookingsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}` + `/getList`);
  }
}
