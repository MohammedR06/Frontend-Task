import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductDataComponent } from './components/product-data/product-data.component';
import { OrderDataComponent } from './components/order-data/order-data.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductUpdateComponent } from './components/product-update/product-update.component';
import { OrderUpdateComponent } from './components/order-update/order-update.component';
import { OrderListComponent } from './components/order-list/order-list.component';

@NgModule({
  declarations: [AppComponent, ProductDataComponent, OrderDataComponent, ProductListComponent, ProductUpdateComponent, OrderUpdateComponent, OrderListComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
