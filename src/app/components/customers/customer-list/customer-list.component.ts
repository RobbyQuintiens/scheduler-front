import {Component, OnChanges, SimpleChanges} from '@angular/core';
import {Customer} from "../../../models/customer";
import {CustomerService} from "../../../services/customer.service";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css'
})
export class CustomerListComponent implements OnChanges {

  customer!: Customer;
  customers!: any;

  constructor(private customerService: CustomerService) {
  }

  async ngOnInit() {
    this.getCustomers();
  }

  getParamsCustomers(page: number, size?: number) {
    const params: any = {};
    // if (locationCity) {
    //   params.location_city = locationCity;
    // }
    // if (eventType) {
    //   params.eventType = eventType.toUpperCase();
    // }
    // if (eventName) {
    //   params.eventName = eventName;
    // }
    if (page) {
      params.page = page;
    }
    if (size) {
      params.size = size;
    }
    return params;
  }

  getCustomers(): void {
    const params = this.getParamsCustomers(0);
    this.customerService.getAllCustomers(params).subscribe(customer => {
        console.log(customer);
        this.customers = customer;
      }
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getCustomers();
  }

}
