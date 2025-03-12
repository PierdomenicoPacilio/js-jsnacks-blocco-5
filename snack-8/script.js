const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];

// Recupera la classe dello studente 'Marco Lanci'
// Risultato: '3C'

// FOR EACH
let studentClass;
students.forEach(element => {if(element.name === 'Marco Lanci') studentClass = element.class});
console.log(studentClass);

console.log('---');

// FILTER
console.log(students.filter(element => element.name === 'Marco Lanci')[0].class);

console.log('---');

// FOR
studentClass = '';
for (i = 0; i < students.length; i++) if (students[i].name === 'Marco Lanci') studentClass = students[i].class;
console.log(studentClass);