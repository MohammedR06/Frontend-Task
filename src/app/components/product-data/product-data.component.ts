import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/service/crud.service';
@Component({
  selector: 'app-product-data',
  templateUrl: './product-data.component.html',
  styleUrls: ['./product-data.component.css'],
})
export class ProductDataComponent {
  constructor(private crudservice: CrudService, private router: Router) {}
  productsForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    quantity: new FormControl('', [Validators.required]),
    amount: new FormControl('', [Validators.required]),
  });
  submit() {
    const data = this.productsForm.value;
    this.crudservice.addProducts(data);
    this.router.navigate(['products']);
  }
}
