const zucchine = [
  { type: 'Napoletana', weight: 10, length: 4 },
  { type: 'Trombetta', weight: 13, length: 16 },
  { type: 'Napoletana', weight: 4, length: 23 },
  { type: 'Trombetta', weight: 11, length: 6 },
  { type: 'Napoletana', weight: 2, length: 17 },
  { type: 'Romana', weight: 5, length: 10 },
  { type: 'Romana', weight: 7, length: 9 },
  { type: 'Trombetta', weight: 3, length: 8 },
  { type: 'Calabrese', weight: 6, length: 27 },
  { type: 'Calabrese', weight: 14, length: 4 },
];

// A partire dall'array fornito, crea due array. Uno con le zucchine più lunghe di almeno 15cm. L'altro con le restanti.

// FOR EACH
let zucchineLunghe = [];
let zucchineCorte = [];
zucchine.forEach(element => (element.length >= 15) ? zucchineLunghe.push(element) : zucchineCorte.push(element));
console.log(zucchineLunghe);
console.log(zucchineCorte);

console.log('---');

// FILTER
console.log(zucchine.filter(element => element.length >= 15));
console.log(zucchine.filter(element => element.length < 15));

console.log('---');

// FOR
zucchineLunghe = [];
zucchineCorte = [];
for (i = 0; i < zucchine.length; i++) (zucchine[i].length >= 15) ? zucchineLunghe.push(zucchine[i]) : zucchineCorte.push(zucchine[i]);
console.log(zucchineLunghe);
console.log(zucchineCorte);