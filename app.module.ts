import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import {FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { HomeDeliveryDetailsComponent } from './home-delivery-details/home-delivery-details.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { OrderDetailsComponent } from './order-details/order-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeDeliveryDetailsComponent,
    OrderSummaryComponent,
    OrderDetailsComponent
  ],
   schemas: [NO_ERRORS_SCHEMA],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
