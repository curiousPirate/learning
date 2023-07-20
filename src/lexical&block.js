// Lexical scope and block scope are two important concepts related to variable and function visibility in JavaScript.

// Lexical Scope: Lexical scope, also known as static scope, refers to the scope visibility of variables and functions based on their physical location in the source code during the lexical analysis phase. In JavaScript, variables and functions defined in a particular scope are accessible in that scope and any nested inner scopes.

function outer() {
  const x = 10;

  function inner() {
    console.log(x); // 'x' is accessible here because of lexical scope
  }

  inner();
}

outer(); // Output: 10

// In the example above, the inner function has access to the x variable defined in its outer scope (outer function) due to lexical scope.

// Block Scope: Block scope refers to the visibility of variables and functions limited to the block in which they are declared. A block is typically defined by curly braces {} in JavaScript, such as in if statements, for loops, while loops, and functions.

function example() {
  if (true) {
    const y = 20; // 'y' is block-scoped to this 'if' block
    console.log(y); // Output: 20
  }

  console.log(y); // Error: 'y' is not defined (outside the block scope)
}

// In the example above, the variable y is block-scoped to the if block, and it is not accessible outside of that block.

// Before the introduction of block-scoped variables (let and const) in ECMAScript 6 (ES6), JavaScript had only function scope and lexical scope. Variables declared with var were function-scoped, meaning they were accessible within the entire function where they were defined, rather than being limited to the block they were declared in.


function example() {
  if (true) {
    var z = 30;
  }

  console.log(z); // Output: 30 (due to function scope)
}

// With the introduction of let and const, developers have more control over variable scoping, allowing them to use block scope to avoid unintended side effects and better manage variables within specific blocks. Using block scope can help prevent variable leakage and improve code maintainability.