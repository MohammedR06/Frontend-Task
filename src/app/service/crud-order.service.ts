import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CrudOrderService {
  constructor() {}
  getallOrder() {
    return JSON.parse(localStorage.getItem('order') || '[]');
  }

  addOrders(data: any) {
    const allOrder = this.getallOrder();
    if (allOrder.length == 0) {
      data.id = allOrder.length + 1;
    } else {
      data.id = allOrder[allOrder.length - 1].id + 1;
    }

    allOrder.push(data);
    const jsonData = JSON.stringify(allOrder);
    localStorage.setItem('order', jsonData);
  }

  updateOrders(id: any, data: any) {
    const allOrder = this.getallOrder();
    allOrder.map((order: any) => {
      if (id == order.id) {
        this.deleteOrders(id);
        this.addOrders(data);
      }
    });
  }

  deleteOrders(id: any) {
    const allOrder = this.getallOrder();
    for (var i = 0; i < allOrder.length; i++) {
      if (allOrder[i].id == id) {
        allOrder.splice(i, 1);
      }
    }
    const jsonData = JSON.stringify(allOrder);
    localStorage.setItem('order', jsonData);
  }
}
