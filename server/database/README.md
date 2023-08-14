There are two common approaches for interacting with a database:

Using the databases' native query language, such as SQL.
Using an Object Data Model ("ODM") or an Object Relational Model ("ORM"). An ODM/ORM represents the website's data as JavaScript objects, which are then mapped to the underlying database. Some ORMs are tied to a specific database, while others provide a database-agnostic backend.

The benefit of using an ORM is that programmers can continue to think in terms of JavaScript objects rather than database semantics — this is particularly true if you need to work with different databases (on either the same or different websites). They also provide an obvious place to perform data validation.

Note: Using ODM/ORMs often results in lower costs for development and maintenance! Unless you're very familiar with the native query language or performance is paramount, you should strongly consider using an ODM.

# Designing part of a database 
Designing the LocalLibrary models
Before you jump in and start coding the models, it's worth taking a few minutes to think about what data we need to store and the relationships between the different objects.

We know that we need to store information about books (title, summary, author, genre, ISBN) and that we might have multiple copies available (with globally unique ids, availability statuses, etc.). We might need to store more information about the author than just their name, and there might be multiple authors with the same or similar names. We want to be able to sort information based on the book title, author, genre, and category.

When designing your models it makes sense to have separate models for every "object" (a group of related information). In this case some obvious candidates for these models are books, book instances, and authors.

You might also want to use models to represent selection-list options (e.g. like a drop-down list of choices), rather than hard-coding the choices into the website itself — this is recommended when all the options aren't known up front or may change. A good example is a genre (e.g. fantasy, science fiction, etc.).

Once we've decided on our models and fields, we need to think about the relationships between them.

With that in mind, the UML association diagram below shows the models we'll define in this case (as boxes). As discussed above, we've created models for the book (the generic details of the book), book instance (status of specific physical copies of the book available in the system), and author. We have also decided to have a model for the genre so that values can be created dynamically. We've decided not to have a model for the BookInstance:status — we will hard code the acceptable values because we don't expect these to change. Within each of the boxes, you can see the model name, the field names and types, and also the methods and their return types.

The diagram also shows the relationships between the models, including their multiplicities. The multiplicities are the numbers on the diagram showing the numbers (maximum and minimum) of each model that may be present in the relationship. For example, the connecting line between the boxes shows that Book and a Genre are related. The numbers close to the Book model show that a Genre must have zero or more Books (as many as you like), while the numbers on the other end of the line next to the Genre show that a book can have zero or more associated Genres.

Note: As discussed in our Mongoose primer below it is often better to have the field that defines the relationship between the documents/models in just one model (you can still find the reverse relationship by searching for the associated _id in the other model). Below we have chosen to define the relationship between Book/Genre and Book/Author in the Book schema, and the relationship between the Book/BookInstance in the BookInstance Schema. This choice was somewhat arbitrary — we could equally well have had the field in the other schema.

# Database APIs are asynchronous
Database methods to create, find, update, or delete records are asynchronous. What this means is that the methods return immediately, and the code to handle the success or failure of the method runs at a later time when the operation completes. Other code can execute while the server is waiting for the database operation to complete, so the server can remain responsive to other requests.

In modern JavaScript callbacks have largely been replaced by Promises. Promises are objects that are (immediately) returned by an asynchronous method that represent it's future state. When the operation completes, the promise object is "settled", and resolves an object that represents the result of the operation or an error.

 we'll primarily be using `await` to wait on promise completion within an `async` function, because this leads to more readable and understandable asynchronous code.

