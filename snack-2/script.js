const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'

// FOR EACH
people.forEach(element => console.log(element.name));

console.log('---');

// MAP
console.log(people.map((element) => element.name));

console.log('---');

// FOR
for(i = 0; i < people.length; i++) console.log(people[i].name);