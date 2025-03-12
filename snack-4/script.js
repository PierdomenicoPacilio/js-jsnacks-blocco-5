const posts = [
  { author: 'Marco', date: '12/3/2021', content: 'lorem ipsum...' },
  { author: 'Luca', date: '30/6/2021', content: 'lorem ipsum...' },
  { author: 'Fabrizio', date: '12/9/2020', content: 'lorem ipsum...' },
  { author: 'Enrico', date: '09/12/2021', content: 'lorem ipsum...' },
]

// Crea un nuovo array coi nomi di tutti gli autori
// Risultato: ['Marco', 'Luca', 'Fabrizio', 'Enrico']

// FOR EACH
let secondPosts = [];
posts.forEach(element => secondPosts.push(element.author));
console.log(secondPosts);

console.log('---');

// MAP
console.log(posts.map((element) => element.author));

console.log('---');

// FOR
secondPosts = [];
for(i = 0; i < posts.length; i++) secondPosts.push(posts[i].author);
console.log(secondPosts);