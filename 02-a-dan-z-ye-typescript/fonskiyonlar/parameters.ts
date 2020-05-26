let logDetails = (user: { name: string; age?: number }, action?): string => {
  if (action === 'add') {
    return 'Kullanıcı eklendi';
  }
  return `İsminiz: ${user.name} ve Yaşınız: ${user.age}`;
};

const userString = logDetails({ name: 'Melis' }, 'add');
console.log(userString);
