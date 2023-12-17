import { Injectable } from '@angular/core';
import {Appointment} from "../models/appointment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  appointments!: Appointment[];
  private readonly appointmentUrl: string;

  constructor(private http: HttpClient) {
    this.appointmentUrl = '/scheduler/appointments/scheduled';
  }

  httpOptions: any = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    responseType: 'text' as 'text',
  };

  public getAppointmentById(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(this.appointmentUrl).pipe(
      catchError(error => {
        return throwError('No appointments found');
      })
    );
  }
}
