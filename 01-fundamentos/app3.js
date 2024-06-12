const fs = require('fs');

const content = fs.readFileSync('README.md', 'utf-8');

const words = content.split(' ').length;

const reactWordCount = content.match(/react/ig ?? []).length;

console.log('Palabras', words);
console.log('Palabras React', reactWordCount); // Case insensitive