import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hotel } from '../model/hotel';
import { Observable, Subject } from 'rxjs';
import { BookingsList } from '../model/bookingsList';
import { b } from '@angular/core/src/render3';
import { TravelAgencyLogin } from '../model/travelAgencyLogin';
import { SuperAdminLogin } from '../model/superAdminLogin';
@Injectable({
  providedIn: 'root'
})
export class HotelService {
  
  private baseUrl = 'http://localhost:8080/api';
  private subject = new Subject<any>();

  name;

  constructor(private http: HttpClient) { }

  save(hotel: Hotel) {
    console.log("add")
    return this.http.post(`${this.baseUrl}` + `/addNewHotel`, hotel);
 }
  getHotels(): Observable<any> {
    return this.http.get(`${this.baseUrl}` + '/getHotels');
 }

  removeHotel(hotelId:any){
    console.log(hotelId)
    return this.http.delete(`${this.baseUrl}` + `/deleteHotel/${hotelId}`);
 }
  book(booklist : BookingsList){
    console.log("book")
    return this.http.post(`${this.baseUrl}` + `/addBookings`,booklist);
  }
  getBookingsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}` + `/getList`);
  }
  removeRoom(bookingId:any){
    return this.http.delete(`${this.baseUrl}` + `/deleteRoom/${bookingId}`);
 }
  // updateHotel(hotelId: Hotel){
  //   return this.http.post(`${this.baseUrl}` + `/updateHotel/${hotelId}`,hotelId);
  // }
  updateBookingStatus(bookingStatus,bookingId){
    console.log(bookingStatus)
    console.log(bookingId)
    return this.http.get(`${this.baseUrl}` + `/updateStatus/${bookingStatus}/${bookingId}`);
  }
  ValidateSuperAdminLogin(uname:string,pwd:string): Observable<any> {
    console.log("addd")
     return this.http.get(`${this.baseUrl}` + `/superadminlogin/${uname}/${pwd}`);
   }
   ValidateAdminLogin(userName: string,password:string): Observable<any> {
    // console.log(userName+"   "+password)
     return this.http.get(`${this.baseUrl}` + `/adminlogin/${userName}/${password}`);
   }
   ValidateTravelLogin(userName:string, password:string): Observable<any> {
    // console.log(userName+"   "+password)
     return this.http.get(`${this.baseUrl}` + `/travelagencylogin/${userName}/${password}`);
   }
   save2(superadmin: SuperAdminLogin) {
    console.log("add")
    return this.http.post(`${this.baseUrl}` + `/superadmin`,superadmin);
 }

 getBookingsListByUserName():any{
   this.name = sessionStorage.getItem('userName')
   console.log(this.name)
   return this.http.get(`${this.baseUrl}` + `/getHotelsByuserName/${this.name}`);
 }
 
}
   
