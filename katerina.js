const fs = require('fs');
const json = fs.readFileSync(`tsconfig.base.json`).toString();
console.log(json);
