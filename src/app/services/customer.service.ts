import {Injectable} from '@angular/core';
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
    headers: new HttpHeaders({'Content-Type': 'application/json'}),
    responseType: 'text' as 'text',
  };

  public getAllCustomers(param?: any): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.customerUrl, {params: param}).pipe(
      catchError(error => {
        return throwError('No customers found');
      })
    );
  }

  public createCustomer(eventFormData: any) {
    const body = JSON.stringify(eventFormData);
    console.log("body:" + body);
    const formData = new FormData();
    return this.http.post<Customer>(this.customerUrl + '/create', body, this.httpOptions).subscribe(
      (res) => console.log(res),
      (error) => console.log(error)
    );
  }

  public deleteCustomer(customerId: number): Observable<any> {
    console.log("customerId:" + customerId);
    return this.http.delete<any>(this.customerUrl + '/delete/' + customerId, this.httpOptions);
  }
}
