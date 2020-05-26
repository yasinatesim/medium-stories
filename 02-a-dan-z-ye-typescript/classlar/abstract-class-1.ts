abstract class User {
  name: string;
  age: number;

  constructor(a: string, b: number) {
    this.name = a;
    this.age = b;
  }

  get() {
    return `İsminiz: ${this.name} ve Yaşınız: ${this.age}`;
  }
}

const user = new User('Melis', 22); // Error: Cannot create an instance of an abstract class.
