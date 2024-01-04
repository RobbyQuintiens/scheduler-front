import { Injectable } from '@angular/core';
import {Appointment} from "../models/appointment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {Customer} from "../models/customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customers!: Customer[];
  private readonly customerUrl: string;

  constructor(private http: HttpClient) {
    this.customerUrl = '/customer/customers';
  }

  httpOptions: any = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    responseType: 'text' as 'text',
  };

  public getAllCustomers(param: any): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.customerUrl, {params: param}).pipe(
      catchError(error => {
        return throwError('No customers found');
      })
    );
  }
}
