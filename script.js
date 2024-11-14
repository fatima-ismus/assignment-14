/**Chain two Promises to perform two dependent asynchronous operations.
• Step 1: Create two functions that return Promises, with the second depending on the first.
• Step 2: Chain the Promises using -then() to handle the first operation, then the second.
• Step 3: Log the result of each operation. */

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Fetched data");
      resolve("Data from API");
    }, 1000);
  });
}

function processData(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Processing data");
      resolve(`${data} processed`);
    }, 1000); // Simulating another 1 second delay
  });
}

/**Implement a basic timer with setInterval that stops after 5 seconds.
• Step 1: Define a function that uses setInterval to print the time every second.
• Step 2: Track elapsed time in a variable.
• Step 3: Use clearInterval to stop the timer after 5 seconds. */
function startTimer() {
  let elapsedTime = 0;

  const intervalId = setInterval(() => {
    elapsedTime += 1;
    console.log(`Elapsed Time: ${elapsedTime} second(s)`);

    if (elapsedTime >= 5) {
      clearInterval(intervalId);
      console.log("Timer stopped.");
    }
  }, 1000);
}

startTimer();

/**Use Promise.all) to execute two Promises concurrently and log both results.
• Step 1: Create two functions that return Promises with different delays.
• Step 2: Use Promise.all) with the two functions.
• Step 3: Log the results once both Promises have resolved */
// Step 1: Define two functions that return Promises with different delays

function taskOne() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Task One Completed (after 2 seconds)");
      resolve("Result from Task One");
    }, 2000);
  });
}

function taskTwo() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Task Two Completed (after 3 seconds)");
      resolve("Result from Task Two");
    }, 3000);
  });
}

Promise.all([taskOne(), taskTwo()])
  .then((results) => {
    console.log("Both tasks are completed:");
    console.log(results);
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });

/**1. Write a function using setTimeout that prints "Hello" after 2 seconds.
• Step 1: Define a function named printHello.
• Step 2: Inside the function, use setTimeout.
• Step 3: Set the delay to 2000 milliseconds (2 seconds).
• Step 4: Within setTimeout, log "Hello" to the console. */

function printHello() {
  setTimeout(() => {
    console.log("Hello");
  }, 2000);
}

printHello();

/**Implement a callback function to multiply two numbers and print the result.
• Step 1: Define a function named multiply.
• Step 2: Make multiply accept three parameters: two numbers and a callback.
• Step 3: Inside multiply, call the callback with the product of the two numbers.
• Step 4: Define a callback function that logs the result to the console.
• Step 5: Call multiply with two numbers and the callback function. */

function multiply(num1, num2, callback) {
  const product = num1 * num2;
  callback(product);
}

function printResult(result) {
  console.log("The product is:", result);
}

multiply(5, 3, printResult);
