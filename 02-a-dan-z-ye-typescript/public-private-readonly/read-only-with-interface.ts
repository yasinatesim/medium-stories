interface IsPerson {
  readonly name: string;
}

const user: IsPerson = {
  name: 'Melis'
};

user.name = 'Yasin'; // Error: Cannot assign to 'name' because it is a read-only property
