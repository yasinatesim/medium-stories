class User {
  readonly name: string;
}

const user = new User();
user.name = 'Yasin'; // Error: Cannot assign to 'name' because it is a read-only property
