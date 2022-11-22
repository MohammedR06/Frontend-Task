import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: any;
  noData = false;

  constructor(private crudservice: CrudService) {}

  ngOnInit(): void {
    const data = this.crudservice.getAllProducts();
    this.products = data;
    console.log(this.products);

    if (this.products.length == 0) {
      this.noData = true;
    } else {
      this.noData = false;
    }
  }
}
