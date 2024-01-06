import {Component, OnChanges, SimpleChanges, ViewChild} from '@angular/core';
import {Customer} from "../../../models/customer";
import {CustomerService} from "../../../services/customer.service";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css'
})
export class CustomerListComponent implements OnChanges {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  customer!: Customer;
  customers!: any;
  pageSize = 10;
  pageSizefix: number = this.pageSize;
  pageSizeOptions = [5, 10];
  currentPage = 0;
  length: number;

  constructor(private customerService: CustomerService) {
  }

  ngOnInit() {
    this.getCustomers();
  }

  handlePage(event: any) {
    this.currentPage = event.pageIndex;
    this.pageSizefix = event.pageSize;
    this.getCustomers();
  }

  getParamsCustomers(page: number, size?: number, company?: boolean) {
    const params: any = {};
    // if (locationCity) {
    //   params.location_city = locationCity;
    // }
    // if (eventType) {
    //   params.eventType = eventType.toUpperCase();
    // }
    if (company) {
      params.company = company;
    }
    if (page) {
      params.page = page;
    }
    if (size) {
      params.size = size;
    }
    return params;
  }

  getCustomers(): void {
    const params = this.getParamsCustomers(this.currentPage, this.pageSizefix);
    this.customerService.getAllCustomers(params).subscribe(customer => {
        this.customers = customer;
      }
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getCustomers();
  }

}
