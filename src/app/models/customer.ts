import {Time} from "@angular/common";
import {User} from "./user";

export class Customer {
  id?: number;
  username?: string;
  firstName?: User;
  lastName: User | undefined;
  email: Time | undefined;
  company: Boolean;
}
