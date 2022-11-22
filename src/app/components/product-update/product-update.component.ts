import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css'],
})
export class ProductUpdateComponent implements OnInit {
  product: any;
  id: any;
  noData = false;

  constructor(
    private crudservice: CrudService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    const data = this.crudservice.getAllProducts();
    data.forEach((product: any) => {
      if (product.id == this.id) {
        this.product = product;
      }
    });
    if (this.product == null || undefined) {
      this.noData = true;
    } else {
      this.productsForm.patchValue({
        name: this.product.name,
        description: this.product.description,
        quantity: this.product.quantity,
        amount: this.product.amount,
      });
    }
  }

  productsForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    quantity: new FormControl('', [Validators.required]),
    amount: new FormControl('', [Validators.required]),
  });

  submit() {
    const data = this.productsForm.value;
    this.crudservice.updateProducts(this.id, data);
    this.router.navigate(['products']);
  }
  delete() {
    this.crudservice.deleteProduct(this.id);
    this.router.navigate(['products']);
  }
}
