interface IsPerson {
  name: string;
  age?: number;
  speak(a: string): void;
}

const user: IsPerson = {
  name: 'Melis',
  // age: 22,
  speak(text: string): void {
    console.log(text);
  },
};

console.log(user);
user.speak('Merhaba!');
