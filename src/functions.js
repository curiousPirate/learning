// Function declaration and function expression are two different ways of defining functions in JavaScript.

// Function Declaration:
// In a function declaration, you define a function using the function keyword followed by the function name and a set of parentheses containing the function parameters. The function body is enclosed in curly braces {}. Function declarations are hoisted, which means they are available throughout the scope where they are defined, even before the actual function declaration in the code.
// Example of function declaration:

// function addNum(a, b) {
//   return a + b;
// }

// Function Expression:
// In a function expression, you define a function as part of an expression. The function is assigned to a variable or a constant. Function expressions are not hoisted, so they cannot be called before the actual expression in the code.
// Example of function expression:

// const add = function(a, b) {
//   return a + b;
// };

// With ES6 and the introduction of arrow functions, function expressions are more commonly used.

// Example of arrow function expression:


// const addNumber = (a, b) => a + b;


// Key differences between function declaration and function expression:

// Hoisting: Function declarations are hoisted, so they can be used before they are defined in the code. Function expressions are not hoisted, and you must define them before using them.

// Syntax: Function declarations have a named function identifier followed by a function body. Function expressions can be anonymous (no name) or assigned to a variable or constant.

// Usability: Function declarations are suitable for writing standalone functions, while function expressions are often used as part of other expressions or for passing functions as arguments to other functions.

// Both function declarations and function expressions have their use cases, and the choice between them depends on the specific scenario and coding style.


// Hoisting is a JavaScript behavior where variable and function declarations are moved to the top of their containing scope during the compilation phase before the code is executed. This means that you can use variables and functions in your code before they are actually declared in the file or function.

// However, it's important to note that only the declarations themselves are hoisted, not the initializations or assignments. For variables, the declaration is hoisted, but the value assignment remains in the same place in the code.

// Here's an example to illustrate hoisting with function declarations:


// Function declaration (hoisted)
// console.log(add(2, 3)); // Output: 5

// function addNum(a, b) {
//   return a + b;
// }

// console.log(add(5, 6)); // Output: 11


// In this example, the function add is declared after the first console.log, but it still works because of hoisting. The function declaration is moved to the top during the compilation phase, so it is available throughout the whole file.

// However, it's important to be aware of the differences between function declarations and function expressions when it comes to hoisting:


// Function expression (not hoisted)
// console.log(subtract(8, 3)); // Error: subtract is not a function

// const subtract = function(a, b) {
//   return a - b;
// };

// console.log(subtract(8, 3)); // Output: 5

// In this example, the function subtract is defined using a function expression, and it is not hoisted. Trying to call the function before the actual expression will result in an error. The function must be defined before you can use it.

// Functions can take parameters.
// Parameters give a name to the data to be passed into the function
function declareHelloAgain(x, y, z) {
  console.log(
    "Hello, my parameter's values are " + x + ", " + y + ", and " + z
  );
  console.log("-----------------------------------");
  return;
}

// Function arguments give parameters their values
// Here the parameter x is given the value 7 when the function is called
declareHelloAgain(7, "Hello", true);

var array = [7, "Hello", true];

function adds(x) {
  if (x < 10) {
    console.log(x + 1);
  } else {
    console.log(x - 1);
  }
  return;
}

function print(word) {
  console.log(word);
  return;
}

function correct(bool) {
  console.log("The Answer is: ", bool);
  return;
}

for (let i = 0; i < array.length; i++) {
  if (array[i] === 7) {
    adds(array[i]);
  } else if (array[i] === "Hello") {
    print(array[i]);
  } else {
    correct(array[i]);
  }
}
