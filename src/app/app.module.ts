import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SuperAdminLoginComponent } from './super-admin-login/super-admin-login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TravelAgencyLoginComponent } from './travel-agency-login/travel-agency-login.component';
import { TravelAgencyPageComponent } from './travel-agency-page/travel-agency-page.component';
import { BookingsComponent } from './bookings/bookings.component';
import { TravelBookingsComponent } from './travel-bookings/travel-bookings.component';
import { SuperAdminPageComponent } from './super-admin-page/super-admin-page.component';
import {TabModule} from 'angular-tabs-component';
import { HotelsListComponent } from './hotels-list/hotels-list.component';
import { BookingsListComponent } from './bookings-list/bookings-list.component';
import { AngularMaterialModule } from './angular-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatButtonModule } from '@angular/material';
// import { Ng2SearchPipeModule } from 'ng2-search-filter';
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SuperAdminLoginComponent,
    AdminLoginComponent,
    AdminPageComponent,
    TravelAgencyLoginComponent,
    TravelAgencyPageComponent,
    BookingsComponent,
    TravelBookingsComponent,
    SuperAdminPageComponent,
    HotelsListComponent,
    BookingsListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    TabModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    MatButtonModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
