/* Importing file into xyz.
If we don't export on the required file, it will not apply the value */
//const xyz = require('./people');

/* Destructuring object: you can extract an specific object from the required file */
const { people, ages } = require('./people');

//console.log(xyz.people, xyz.ages);

//console.log(people);

/* Requiring OS Module from Nodejs */
const os = require('os');

console.log(os.platform(), os.homedir());