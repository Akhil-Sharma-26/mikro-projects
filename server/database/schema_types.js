const schema = new Schema({
    name: String,
    binary: Buffer,
    living: Boolean,
    updated: { type: Date, default: Date.now() },
    age: { type: Number, min: 18, max: 65, required: true },
    mixed: Schema.Types.Mixed,
    _someId: Schema.Types.ObjectId,
    array: [],
    ofString: [String], // You can also have an array of each of the other types too.
    nested: { stuff: { type: String, lowercase: true, trim: true } },
  });

//   Most of the SchemaTypes (the descriptors after "type:" or after field names) are self-explanatory. The exceptions are:

// ObjectId: Represents specific instances of a model in the database. For example, a book might use this to represent its author object. This will actually contain the unique ID (_id) for the specified object. We can use the populate() method to pull in the associated information when needed.
// Mixed: An arbitrary schema type.
// []: An array of items. You can perform JavaScript array operations on these models (push, pop, unshift, etc.). The examples above show an array of objects without a specified type and an array of String objects, but you can have an array of any type of object.

// example
const breakfastSchema = new Schema({
    eggs: {
      type: Number,
      min: [6, "Too few eggs"],
      max: 12,
      required: [true, "Why no eggs?"],
    },
    drink: {
      type: String,
      enum: ["Coffee", "Tea", "Water"],
    },
  });