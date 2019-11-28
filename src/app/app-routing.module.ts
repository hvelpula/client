import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { Routes, RouterModule } from '@angular/router';
import { SuperAdminLoginComponent } from './super-admin-login/super-admin-login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { TravelAgencyPageComponent } from './travel-agency-page/travel-agency-page.component';
import { TravelAgencyLoginComponent } from './travel-agency-login/travel-agency-login.component';
import { BookingsComponent } from './bookings/bookings.component';
import { TravelBookingsComponent } from './travel-bookings/travel-bookings.component';
import { SuperAdminPageComponent } from './super-admin-page/super-admin-page.component';
import { HotelsListComponent } from './hotels-list/hotels-list.component';
import { BookingsListComponent } from './bookings-list/bookings-list.component';


const routes: Routes = [

  {path : '',redirectTo: '/homepage', pathMatch:'full'},
    {path : 'homepage', component: HomepageComponent},
    {path : 'super-admin-login', component: SuperAdminLoginComponent},
    {path : 'admin-login', component: AdminLoginComponent},
    {path : 'admin-page', component: AdminPageComponent },
    {path : 'travel-agency-login', component: TravelAgencyLoginComponent},
    {path : 'travel-agency-page', component: TravelAgencyPageComponent},
    {path : 'bookings', component: BookingsComponent},
    {path : 'travel-bookings', component: TravelBookingsComponent},
    {path : 'super-admin-page', component: SuperAdminPageComponent},
    {path : 'hotels-list', component: HotelsListComponent},
    {path : 'bookings-list', component: BookingsListComponent}


]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]  ,
})
export class AppRoutingModule {
 
 }
