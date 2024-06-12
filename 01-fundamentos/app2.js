const fs = require('fs'); // fs is a core module

const data = fs.readFileSync('README.md', 'utf-8'); // readFileSync is a function in fs module

const newData = data.replace(/React/ig, 'Angular'); // replace is a function in string prototype

fs.writeFileSync('README-Angular.md', newData);