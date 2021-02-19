//this file contains code to spin up the server, unlike php, here we create server
//to create the server we are importing http module
const http = require('http');
const app = require('./app');

//the port at which our server will run, process.env accesses nodejs env variables,
// if it is set by the hosting server else it will use default set 3000. 
const port = process.env.PORT || 3000;

//Here we are creating object of server, the function requires listener who will listen the request, here app is a listener
//and an express framework object
const server = http.createServer(app);

//Here we are actually starting the server to listen the requests.
server.listen(port, () => console.log(`A structured rest API is running on port ${port}!..................`));