// Models are defined using the Schema interface. The Schema allows you to define the fields stored in each document along with their validation requirements and default values.
// Schemas are then "compiled" into models using the mongoose.model() method.

const mongoose=require("mongoose");
 // defining schema

const schema=mongoose.Schema;
const Model1Schema=new Schema({
    a_string: String,
    a_date: Date
})

// compiling model from schema
const Model1=mongoose.model("Model1",Model1Schema);

// Note: Once you've defined your model classes you can use them to create, update, or delete records, and run queries to get all records or particular subsets of records. We'll show you how to do this in the Using models section, and when we create our views.


// You can then require and use the model immediately in other files. Below we show how you might use it to get all instances of the model. 

// Create a SomeModel model just by requiring the module
const SomeModel = require("../models/somemodel");

// Use the SomeModel object (model) to find all SomeModel records
const modelInstances = await SomeModel.find().exec();