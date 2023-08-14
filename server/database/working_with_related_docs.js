// You can create references from one document/model instance to another using the ObjectId schema field, or from one document to many using an array of ObjectIds. The field stores the id of the related model. If you need the actual content of the associated document, you can use the populate() method in a query to replace the id with the actual data.

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const authorSchema = Schema({
  name: String,
  stories: [{ type: Schema.Types.ObjectId, ref: "Story" }],
});

const storySchema = Schema({
  author: { type: Schema.Types.ObjectId, ref: "Author" },
  title: String,
});

const Story = mongoose.model("Story", storySchema);
const Author = mongoose.model("Author", authorSchema);

// explanation: 
//  Each author can have multiple stories, which we represent as an array of ObjectId. Each story can have a single author. The ref property tells the schema which model can be assigned to this field.


// We can save our references to the related document by assigning the _id value. Below we create an author, then a story, and assign the author id to our story's author field. 
const bob = new Author({ name: "Bob Smith" });

await bob.save();

// Bob now exists, so lets create a story
const story = new Story({
  title: "Bob goes sledding",
  author: bob._id, // assign the _id from our author Bob. This ID is created by default!
});

await story.save();

// Note: One great benefit of this style of programming is that we don't have to complicate the main path of our code with error checking. If any of the save() operations fail, the promise will reject and an error will be thrown. Our error handling code deals with that separately (usually in a catch() block), so the intent of our code is very clear.


Story.findOne({ title: "Bob goes sledding" })
  .populate("author") // Replace the author id with actual author information in results
  .exec();

//   Note: Astute readers will have noted that we added an author to our story, but we didn't do anything to add our story to our author's stories array. How then can we get all stories by a particular author? One way would be to add our story to the stories array, but this would result in us having two places where the information relating authors and stories needs to be maintained.

// A better way is to get the _id of our author, then use find() to search for this in the author field across all stories.

Story.find({ author: bob._id }).exec();