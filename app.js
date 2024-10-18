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
// var stuff = require('./stuff');
// console.log(stuff.counter(['aa', 'bb', 'cc']));
// console.log(stuff.adder(5,6));
// console.log(stuff.adder(stuff.pi, 6));

// The Node Event Emitter
// var events = require('events');
// var myEmitter = new events.EventEmitter();
// myEmitter.on('someEvent', function (mssg) {
//     console.log(mssg);
// });
// myEmitter.emit('someEvent', 'the event was e mitted');



// Reading & Writing Files (fs)
// var fs = require('fs');
// var readMe = fs.readFileSync('readMe.txt', 'utf8');
// console.log(readMe);
// fs.writeFileSync('writeMe.txt', readMe);

// fs.readFileSync('readMe.txt', 'utf8', function(err, data){
//     console.log(data);
// });

// var http = require('http');

// var server = http.createServer(function (req, res) {
//     console.log('resuest was made: ' + req.url)
//     res.writeHead(200, { 'Content-Type': 'text/json' });
//     var myObj = {
//         name: 'Ryu',
//         job: 'Ninja',
//         age: 29
//     };
//     res.end(JSON.stringify(myObj));
// })

// server.listen(3000, '127.0.0.1');
// console.log('Hello...')



// Basic Routing
var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
    console.log('resuest was made: ' + req.url)
    if (req.url === '/home' || req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    } else if (req.url === '/contact') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream(__dirname + '/contact.html').pipe(res);
    } else if (req.url === '/api/apou') { 
        var apou = [{ name: 'ryu', age: 29 }, { name: 'apou', age: 31 }];
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(apou))
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        fs.createReadStream(__dirname + '/404.html').pipe(res);
    }
    
})

server.listen(3000, '127.0.0.1');
console.log('Hello...')