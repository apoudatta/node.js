// console.log('hey node!');

// setInterval
// var time = 0;
// var timer = setInterval(() => {
//     time += 2;
//     console.log(time + ' second have passed');
//     if (time > 5) {
//         clearInterval(timer);
//     }
// }, 2000);

// console.log(__dirname);
// console.log(__filename);


// var counter = require('./count')
// console.log(counter(['aa', 'bb', 'cc']));

// Module Patterns
var stuff = require('./stuff');
console.log(stuff.counter(['aa', 'bb', 'cc']));
console.log(stuff.adder(5,6));
console.log(stuff.adder(stuff.pi, 6));