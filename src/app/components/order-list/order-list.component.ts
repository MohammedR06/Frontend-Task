import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CrudOrderService } from 'src/app/service/crud-order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css'],
})
export class OrderListComponent {
  order: any;
  noData = false;

  constructor(
    private crudorderservice: CrudOrderService,
    private router: Router
  ) {}
  onAdd() {
    this.router.navigate(['orders/add']);
  }

  ngOnInit(): void {
    const data = this.crudorderservice.getallOrder();
    this.order = data;
    console.log(this.order);

    if (this.order.length == 0) {
      this.noData = true;
    } else {
      this.noData = false;
    }
  }
}
