const http = require('http');
const today = require('./today');

const requestListener = function (req, res) {
    res.writeHead(200);

    let dateVal = today.getDate(); // Get the current date from the 'today' module

    // Validate that dateVal is a valid Date object
    if (!(dateVal instanceof Date) || isNaN(dateVal.getTime())) {
        res.end('Error: Invalid date value returned from today module');
        return;
    }

    // Determine the appropriate greeting based on the current time
    let greeting = "It is still not morning";
    if (dateVal.getHours() > 6 && dateVal.getHours() < 12) {
        greeting = "Good morning!";
    } else if (dateVal.getHours() >= 12 && dateVal.getHours() < 18) {
        greeting = "Good afternoon!";
    } else if (dateVal.getHours() >= 18 && dateVal.getHours() < 21) {
        greeting = "Good evening!";
    } else if (dateVal.getHours() >= 21 && dateVal.getHours() < 24) {
        greeting = "Good night!";
    }

    res.end(`Hello, ${greeting} ${dateVal}`);
};

const port = 8080;
const server = http.createServer(requestListener);
server.listen(port);
console.log('Server listening on port: ' + port);
