// morgan is 3rd party middleware
const express = require("express");
const logger = require("morgan");
const app = express();
app.use(logger("dev"));
// …

// middle ware is use for working with cookies, sessions, user authentication, accessing request POST and JSON data, logging, etc. 
 
// Note: The middleware can perform any operation, execute any code, make changes to the request and response object, and it can also end the request-response cycle. If it does not end the cycle then it must call next() to pass control to the next middleware function (or the request will be left hanging).