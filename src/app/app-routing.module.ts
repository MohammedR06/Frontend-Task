import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderDataComponent } from './components/order-data/order-data.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import { OrderUpdateComponent } from './components/order-update/order-update.component';
import { ProductDataComponent } from './components/product-data/product-data.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductUpdateComponent } from './components/product-update/product-update.component';

const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  {
    path: 'products',
    component: ProductListComponent,
  },
  {
    path: 'products/add',
    component: ProductDataComponent,
  },
  {
    path: 'products/:id',
    component: ProductUpdateComponent,
  },
  {
    path: 'orders',
    component: OrderListComponent,
  },
  {
    path: 'orders/add',
    component: OrderDataComponent,
  },
  {
    path: 'orders/:id',
    component: OrderUpdateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
