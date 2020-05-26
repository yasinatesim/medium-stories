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

class Person extends User {
  constructor(a,b) {
    super(a,b);
  }

  sayHello() {
    return `Merhaba ${this.name}`
  }
}

const person = new Person('Melis', 22);

console.log(person.get());
console.log(person.sayHello());
