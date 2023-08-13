// Errors are handled by one or more special middleware functions that have four arguments, instead of the usual three: (err, req, res, next).

app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send("Something broke!");
  });

//   These can return any content required, but must be called after all other app.use() and routes calls so that they are the last middleware in the request handling process!

// Note: HTTP404 and other "error" status codes are not treated as errors. If you want to handle these, you can add a middleware function to do so

// Note: The stack trace is not included in the production environment. To run it in production mode you need to set the environment variable NODE_ENV to 'production'.

//Express comes with a built-in error handler, which takes care of any remaining errors that might be encountered in the app.  Even if we don't handle the error, it does.