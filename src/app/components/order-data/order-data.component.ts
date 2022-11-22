import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudOrderService } from 'src/app/service/crud-order.service';

@Component({
  selector: 'app-order-data',
  templateUrl: './order-data.component.html',
  styleUrls: ['./order-data.component.css'],
})
export class OrderDataComponent {
  constructor(
    private crudorderservice: CrudOrderService,
    private router: Router
  ) {}
  ordersData = new FormGroup({
    customername: new FormControl('', [Validators.required]),
    pdate: new FormControl('', [Validators.required]),
    ddate: new FormControl('', [Validators.required]),
    quantity: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
  });

  submit() {
    const data = this.ordersData.value;
    this.crudorderservice.addOrders(data);
    this.router.navigate(['orders']);
  }
}
