// import mongoose module
const mongoose=require("mongoose");

// Set `strictQuery: false` to globally opt into filtering by properties that aren't in the schema
// Included because it removes preparatory warnings for Mongoose 7.
// See: https://mongoosejs.com/docs/migrating_to_6.html#strictquery-is-removed-and-replaced-by-strict
mongoose.set("strictQuery",false);

// define the database url to connect to:
const mongoDB="mongodb://127.0.0.1/my_database";


// wait for the database to connect, give an error if failed to do so.
main().catch((err)=>console.log(err));
async function main(){
    await mongoose.connect(mongoDB);
}

// Note: As discussed in the Database APIs are asynchronous section, here we await on the promise returned by the connect() method within a function declared using async function ( section). We use the promise catch() handler to handle any errors when trying to connect, but we might also have called main() within a try...catch block.

// You can get the default Connection object with mongoose.connection. If you need to create additional connections you can use mongoose.createConnection(). This takes the same form of database URI (with host, database, port, options, etc.) as connect() and returns a Connection object). Note that createConnection() returns immediately; if you need to wait on the connection to be established you can call it with asPromise() to return a promise (mongoose.createConnection(mongoDB).asPromise()).