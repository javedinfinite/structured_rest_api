//express is a framework for building restfull api
const express = require("express");
const app = express();

//"morgan" is HTTP request logger middleware for node.js, this will help us to see log in server terminal of the incoming requests
const morgan = require("morgan");
const bodyParser = require("body-parser");

const hotelsRoutes = require("./api/routes/hotels");
 
//use method is used to call any middleware. Any incoming request has to go through this middleware.
//The middleware can be a simple arrow function where we can simply have req, res, next parameter to server the request. 

//here we are telling  morgan to log in the "dev" pre-defined format, we can also use other gormat as "combined" 
app.use(morgan("dev"));

//To handle HTTP POST request in Express.js ,
//body-parser extract the entire body portion of an incoming request stream and exposes it on req.body.
//without it the body portion of the request will not be received in root of req like "req.body"

//support parsing of application/x-www-form-urlencoded post data
//i.e. Returns middleware that only parses urlencoded bodies and only looks at requests
//where the Content-Type header matches the type option. Here the option "extended"
//allows to choose between parsing the URL-encoded data with the querystring library (when false) or the qs library (when true).
//qs and querystring library , both have same purpose of coverting query to json format, but qs has more advance features.
app.use(bodyParser.urlencoded({ extended: false }));

// support parsing of application/json type post data
app.use(bodyParser.json());


app.use((req, res, next) => {
  //here we are setting headers for browser to make browser understand what origin and headers are allowed to this api.
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  //here we are setting response if the browser send request for options method.
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  //since after this setting we are not responding back to client with res. (except OPTIONS method case)
  // we must send control to next lines of codes, hence call next()
  next();
});

//this means any request which comes on "/hotels" route will got to "hotelsRoutes" and will be served from there.
app.use("/hotels", hotelsRoutes);


//Here we are writing error response as if the controll is reaching here meaning the above code somehow fails to respond, meaning error

//This one will be always respond for any error, we can customize it further, currently we are using our custom message.
app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

//if above error handling fails, this error handling will respond, so idealy this one is the better one as it will have 
//separate error message for separate error and we will not have to write the message as we did in above error handling
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

//let's exort this module so tha it can be used in other modules.
module.exports = app;