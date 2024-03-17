import {Time} from "@angular/common";
import {User} from "./user";
import {Address} from "./address";

export class Customer {
  id?: number;
  username?: string;
  firstName?: User;
  lastName: User | undefined;
  email: Time | undefined;
  company: number;
  phoneNumber: string;
  addresses: Address[];
}
