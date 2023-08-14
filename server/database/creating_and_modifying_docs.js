// Create an instance of model SomeModel
const awesome_instance = new SomeModel({ name: "awesome" });

// Save the new model instance asynchronously
await awesome_instance.save();

// You can also use create() to define the model instance at the same time as you save it. Below we create just one, but you can create multiple instances by passing in an array of objects.

await SomeModel.create({ name: "also_awesome" });

// Every model has an associated connection (this will be the default connection when you use mongoose.model()). You create a new connection and call .model() on it to create the documents on a different database.

// You can access the fields in this new record using the dot syntax, and change the values. You have to call save() or update() to store modified values back to the database.

// Access model field values using dot notation
console.log(awesome_instance.name); //should log 'also_awesome'

// Change record by modifying the fields, then calling save().
awesome_instance.name = "New cool name";
await awesome_instance.save();