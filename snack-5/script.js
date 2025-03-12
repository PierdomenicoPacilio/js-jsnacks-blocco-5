const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]

// FOR EACH
let secondNums = [];
nums.forEach((element) => {if (element % 2 === 0) secondNums.push(element) });
console.log(secondNums);

console.log('---');

// FILTER
console.log(nums.filter((element) => element % 2 === 0));

console.log('---');

// FOR 
secondNums = [];
for(i = 0; i < nums.length; i++) if (nums[i] % 2 === 0) secondNums.push(nums[i]);
console.log(secondNums);