// The way this approach works is that you use the async function keyword to mark a function as asynchronous, and then inside that function apply await to any method that returns a promise. When the asynchronous function is executed its operation is paused at the first await method until the promise settles. From the perspective of the surrounding code the asynchronous function then returns and the code after it is able to run. Later when the promise settles, the await method inside the asynchronous function returns with the result, or an error is thrown if the promise was rejected. The code in the asynchronous function then executes until either another await is encountered, at which point it will pause again, or until all the code in the function has been run.

//  we'll primarily be using `await` to wait on promise completion within an `async` function, because this leads to more readable and understandable asynchronous code.


async function myFunction() {
    // ...
    await someObject.methodThatReturnsPromise();
    // ...
    await aFunctionThatReturnsPromise();
    // ...
  }
  
  try {
    // ...
    myFunction();
    // ...
  } catch (e) {
   // error handling code
  }

// Explanation:
// myFunction() is an asynchronous function that is called within a try...catch block. When myFunction() is run, code execution is paused at methodThatReturnsPromise() until the promise resolves, at which point the code continues to aFunctionThatReturnsPromise() and waits again. The code in the catch block runs if an error is thrown in the asynchronous function, and this will happen if the promise returned by either of the methods is rejected.

async function myFunction (){
    // ...
    const [resultFunction1, resultFunction2] = await Promise.all([
       functionThatReturnsPromise1(),
       functionThatReturnsPromise2()
    ]);
    // ...
    await anotherFunctionThatReturnsPromise(resultFunction1);
  }

//   First, we have two functions that return promises. We await on both of them to complete using the promise returned by Promise.all(). Once they both complete await returns and the results array is populated, the function then continues to the next await, and waits until the promise returned by anotherFunctionThatReturnsPromise() is settled. You would call the myFunction() in a try...catch block to catch any errors.