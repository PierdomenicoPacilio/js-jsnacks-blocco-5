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

// Recupera i dati dello studente con id 2
// Risultato: { id: 2, name: 'Mario Banfi', age: 34, class: '4A' }

// FOR EACH
let student;
students.forEach(element => {if(element.id === 2) student = element});
console.log(student);

console.log('---');

// FILTER
console.log(students.filter(element => element.id === 2)[0]);

console.log('---');

// FOR
student = '';
for(i = 0; i < students.length; i++) if (students[i].id === 2) student = students[i];
console.log(student);