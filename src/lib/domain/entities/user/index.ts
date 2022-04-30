import { Type } from "class-transformer";

export default class User {
  age = 0;
  country = '';
  email = '';
  @Type(() => UserName)
  public name: UserName = new UserName();
}

export class UserName {
  firstName = '';
  lastName = '';
}
