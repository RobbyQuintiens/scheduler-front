import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customer-filter',
  templateUrl: './customer-filter.component.html',
  styleUrl: './customer-filter.component.css'
})
export class CustomerFilterComponent {

  value = '';

  constructor() {
  }

}
