import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudOrderService } from 'src/app/service/crud-order.service';
import { CrudService } from 'src/app/service/crud.service';
@Component({
  selector: 'app-order-update',
  templateUrl: './order-update.component.html',
  styleUrls: ['./order-update.component.css'],
})
export class OrderUpdateComponent {
  order: any;
  id: any;
  noData = false;
  products: any;
  orders: any;

  constructor(
    private crudorderservice: CrudOrderService,
    private crudservice: CrudService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    const data = this.crudorderservice.getallOrder();
    data.forEach((order: any) => {
      if (order.id == this.id) {
        this.order = order;
      }
    });
    if (this.order == null || undefined) {
      this.noData = true;
    } else {
      this.ordersData.patchValue({
        customername: this.order.customername,
        pdate: this.order.pdate,
        ddate: this.order.ddate,
        quantity: this.order.quantity,
        name: this.order.name,
      });
    }
    const productdata = this.crudservice.getAllProducts();
    this.products = productdata;
    const orderdata = this.crudorderservice.getallOrder();
    this.orders = orderdata;
  }

  ordersData = new FormGroup({
    customername: new FormControl('', [Validators.required]),
    pdate: new FormControl('', [Validators.required]),
    ddate: new FormControl('', [Validators.required]),
    quantity: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
  });

  submit() {
    const data = this.ordersData.value;
    this.crudorderservice.updateOrders(this.id, data);
    this.router.navigate(['orders']);
  }
  delete() {
    this.crudorderservice.deleteOrders(this.id);
    this.router.navigate(['orders']);
  }
}
