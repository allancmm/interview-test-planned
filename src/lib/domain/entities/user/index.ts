export default class User {
  age = 0;
  country = '';
  email = '';
  name: UserName = {
    firstName: '',
    lastName: '',
  };
}

class UserName {
  firstName = '';
  lastName = '';
}
