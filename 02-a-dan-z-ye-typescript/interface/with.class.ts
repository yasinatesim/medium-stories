interface IsPerson {
  name: string;
  age?: number;
  speak(a: string): void;
}

class User implements IsPerson {
  name: string = 'Melis';
  age: number = 22;

  speak(): string {
    return `Merhaba ben ${this.name} ve yaşım ${this.age}`;
  }
}

const user = new User();

console.log(user.speak());
