import {Time} from "@angular/common";
import {User} from "./user";

export interface Appointment {
  id?: number;
  title?: string;
  provider?: User;
  customer: User | undefined;
  startTime: Time | undefined;
  endTime: Time | undefined;
  day: Date | undefined;
  status: string;
}
