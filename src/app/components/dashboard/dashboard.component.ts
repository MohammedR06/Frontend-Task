import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  constructor(private router: Router) {}
  onSelect() {
    this.router.navigate(['products']);
  }
  onPress() {
    this.router.navigate(['orders']);
  }
}