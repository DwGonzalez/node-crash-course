/* Importing the file system module */
const fs = require('fs');

/* Reading files */
/* This is asynchronous */
fs.readFile('./docs/blog1.txt', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
});

console.log('last line');

/* Writing files */
fs.writeFile('./docs/blog1.txt', 'hello world!', () => {
    console.log('file was written');
});

/* If you try to write to a file that doesn't exist, it will create it */
fs.writeFile('./docs/blog2.txt', 'hello world!', () => {
    console.log('file was written');
});

/* Directories */
/* If we try to create a folder that already exist it will give an error. */
if (!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('folder created');
    });
} else {
    /* delete folder */
    fs.rmdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('folder deleted');
    })
}

/* Deleting files */
if (fs.existsSync('./docs/deleteme.txt')) {
    /* delete file */
    fs.unlink('./docs/deleteme.txt', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('file deleted');
    });
}