// Note: Middleware and routing functions are called in the order that they are declared. For some middleware the order is important (for example if session middleware depends on cookie middleware, then the cookie handler must be added first). It is almost always the case that middleware is called before setting routes, or your route handlers will not have access to functionality added by your middleware.

// You can write your own middleware functions, and you are likely to have to do so (if only to create error handling code). The only difference between a middleware function and a route handler callback is that middleware functions have a third argument next, which middleware functions are expected to call if they are not that which completes the request cycle (when the middleware function is called, this contains the next function that must be called).

// You can add a middleware function to the processing chain for all responses with app.use(), or for a specific HTTP verb using the associated method: app.get(), app.post(), etc. Routes are specified in the same way for both cases, though the route is optional when calling app.use().

const express = require("express");
const app = express();

// An example middleware function
const a_middleware_function = function (req, res, next) {
  // Perform some operations
  next(); // Call next() so Express will call the next middleware function in the chain.
};

// Function added with use() for all routes and verbs
app.use(a_middleware_function);

// Function added with use() for a specific route
app.use("/someroute", a_middleware_function);

// A middleware function added for a specific HTTP verb and route
app.get("/", a_middleware_function);

app.listen(3000);

// Note: Above we declare the middleware function separately and then set it as the callback. In our previous route handler function we declared the callback function when it was used.