import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class CrudService {
  constructor(private router: Router) {}
  getAllProducts() {
    return JSON.parse(localStorage.getItem('products') || '[]');
  }

  addProducts(data: any) {
    const allProducts = this.getAllProducts();
    if (allProducts.length == 0) {
      data.id = allProducts.length + 1;
    } else {
      data.id = allProducts[allProducts.length - 1].id + 1;
    }

    allProducts.push(data);
    const jsonData = JSON.stringify(allProducts);
    localStorage.setItem('products', jsonData);
  }

  updateProducts(id: any, data: any) {
    const allProducts = this.getAllProducts();
    allProducts.map((product: any) => {
      if (id == product.id) {
        this.deleteProduct(id);
        this.addProducts(data);
      }
    });
    this.router.navigate(['products']);
  }

  deleteProduct(id: any) {
    const allProducts = this.getAllProducts();
    for (var i = 0; i < allProducts.length; i++) {
      if (allProducts[i].id == id) {
        allProducts.splice(i, 1);
      }
    }
    const jsonData = JSON.stringify(allProducts);
    localStorage.setItem('products', jsonData);
  }
}
