// const fs = require('fs');
// for (let index = 0; index < 20; index++) {
//     fs.readFile('codecamp.txt', 'utf8', (err, data) => {
//         console.log(data);
//     });
//     fs.readFile('codecamp2.txt', 'utf8', (err, data) => {
//         console.log(data);
//     });
//     console.log("========================")
// }
// =============================================================

// function addSync(a, b) {
//     return a + b;
// }
// let sum = addSync(1, 2);
// console.log(sum)

// function add(a, b, callbackFunction) {
//     callbackFunction(null, a + b);
// }

// let sum2;
// add(4, 5, (err, returnValue) => {
//     sum2 = returnValue;
// });
// console.log(sum2)
// =============================================================

// function setTimeoutAndLog(input, millisec) {
//     return new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             console.log(input)
//             if (input === 'c') {
//                 reject("ERROR: c is showed")
//             }
//             resolve()
//         }, millisec)
//     })
//         .then(() => console.log("then"))
//         .then(() => console.log("then_2"))
//         .catch((error) => console.log(error))
// }

// async function test() {
//     await setTimeoutAndLog('a', 1000)
//     await setTimeoutAndLog('b', 1000)
//     await setTimeoutAndLog('c', 1000)
//     await setTimeoutAndLog('d', 1000)
// }

// test()
// =============================================================

// const fetch = require('node-fetch');
// async function getUser() {
//     try {
//         const response = await fetch('https://randomuser.me/api')
//         const data = await response.json()
//         console.log(response.status)
//         console.log(data.results)
//     } catch (err) {
//         console.log(err)
//     }
// }
// getUser()
// =============================================================

// var myJSON = `{"name": "Kate", "pet": {"dog": "Corgi", "cat": "Persian"}}`;

// var myObj = JSON.parse(myJSON);

// console.log(myObj)
// // Modify myObj...
// console.log(JSON.stringify(myObj));
// =============================================================

// var http = require('http');

// http.createServer((req, res) => {
//     if (req.url == '/') {
//         res.write('hello world');
//     } else if (req.url == '/tom') {
//         res.write('hello tom')
//     } else if (req.url == '/joe') {
//         res.write('hello joe')
//     }
//     res.end();
// }).listen(3000);
// =============================================================

// var express = require('express')
// var app = express()

// app.get('/', function (req, res) {
//     res.send('hello world')
// })
// app.post('/bye', function (req, res) {
//     res.send('Good bye')
// })

// app.listen(5555)

var express = require('express')
var app = express()

const interceptor = function (req, res, next) {
    console.log(`url: ${req.url}`);
    console.log(`method: ${req.method}`);
    next();
}
var catRoute = require('./cat/catRoute')
var dogRoute = require('./dog/dogRoute')

app.use(interceptor)
app.use('/dog', dogRoute)
app.use('/cat', catRoute)

app.listen(3000)