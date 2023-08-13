const express = require("express");
const app = express();
const port = 3000;
// Note: Adding routes to the Router object is just like adding routes to the app object
const wiki = require("./wiki.js");
// …
app.use("/wiki", wiki)
// To use the router in our main app file we would then require() the route module (wiki.js), then call use() on the Express application to add the Router to the middleware handling path. The two routes will then be accessible from /wiki/ and /wiki/about/.
app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
  });