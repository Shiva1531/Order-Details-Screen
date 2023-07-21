import { NgModule } from '@angular/core';
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
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
