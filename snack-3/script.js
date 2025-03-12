const numbers = [2, 8, 4, 7, 2, 87];

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1
// Risultato: [3, 9, 5, 8, 3, 88]

let secondNumbers = [];
numbers.forEach(element => secondNumbers.push(element + 1));
console.log(secondNumbers);
console.log('---');
console.log(numbers.map((element) =>  element + 1));
console.log('---');
secondNumbers = [];
for(i = 0; i < numbers.length; i++) secondNumbers.push(numbers[i] + 1);
console.log(secondNumbers);