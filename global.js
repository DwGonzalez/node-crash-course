/* Global object */
console.log(global);

/* Runs the function once after the timer runs out */
setTimeout(() => {
    console.log('In the timeout');
    clearInterval(int);
}, 3000);

/* Runs the function every one second */
const int = setInterval(() => {
    console.log('In the interval');
}, 1000)

/* Gets the directory name of the project */
console.log(__dirname);

/* Get the file name from where it's called */
console.log(__filename);