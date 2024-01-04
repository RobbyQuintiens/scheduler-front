import {Component, OnChanges, SimpleChanges} from '@angular/core';
import { CommonModule } from '@angular/common';
import {KeycloakService} from "keycloak-angular";
import {AppointmentService} from "../../../services/appointment.service";
import {Appointment} from "../../../models/appointment";

@Component({
  selector: 'app-appointment-card',
  templateUrl: './appointment-card.component.html',
  styleUrl: './appointment-card.component.css'
})
export class AppointmentCardComponent implements OnChanges{

  appointment!: Appointment;
  appointments!: Appointment[];

  constructor(private appointmentService: AppointmentService) {
  }

  async ngOnInit() {
    this.getAppointments();
  }

  getAppointments(): void {
    this.appointmentService.getAllAppointments().subscribe(appointment =>
      this.appointments = appointment
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getAppointments();
  }

}
