/* Use data, before it finishes loading */
const fs = require('fs');

/* Starts reading data */
const readStream = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf-8' });
const writeStream = fs.createWriteStream('./docs/blog4.txt');

// readStream.on('data', (chunk) => {
//     console.log('--- NEW CHUNK ---');
//     console.log(chunk);

//     writeStream.write('\nNEW CHUNK\n');
//     writeStream.write(chunk);
// })

/* Pipe */
readStream.pipe(writeStream);