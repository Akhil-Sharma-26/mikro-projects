const Athlete = mongoose.model("Athlete", yourSchema);

// find all athletes who play tennis, selecting the 'name' and 'age' fields
const tennisPlayers = await Athlete.find(
  { sport: "Tennis" },
  "name age",
).exec();

// Note: It is important to remember that not finding any results is not an error for a search — but it may be a fail-case in the context of your application. If your application expects a search to find a value you can check the number of entries returned in the result.

// Query APIs, such as find(), return a variable of type Query. You can use a query object to build up a query in parts before executing it with the exec() method. exec() executes the query and returns a promise that you can await on for the result.

// find all athletes that play tennis
const query = Athlete.find({ sport: "Tennis" });

// selecting the 'name' and 'age' fields
query.select("name age");

// limit our results to 5 items
query.limit(5);

// sort by age
query.sort({ age: -1 });

// execute the query at a later time
query.exec();

//  We can also do this using a where() function, and we can chain all the parts of our query together using the dot operator (.) rather than adding them separately. The code fragment below is the same as our query above, with an additional condition for the ag

Athlete.find()
  .where("sport")
  .equals("Tennis")
  .where("age")
  .gt(17)
  .lt(50) // Additional where query
  .limit(5)
  .sort({ age: -1 })
  .select("name age")
  .exec();

//   For more:
// findById(): Finds the document with the specified id (every document has a unique id).
// findOne(): Finds a single document that matches the specified criteria.
// findByIdAndRemove(), findByIdAndUpdate(), findOneAndRemove(), findOneAndUpdate(): Finds a single document by id or criteria and either updates or removes it. These are useful convenience functions for updating and removing records.
// Note: There is also a countDocuments() method that you can use to get the number of items that match conditions. This is useful if you want to perform a count without actually fetching the records.