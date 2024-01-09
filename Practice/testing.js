// Regular function
function regularFunction() {
    console.log(this); // Depends on how the function is called
    console.log(arguments); // Has its own arguments object
  }
  
  // Arrow function
  const arrowFunction = () => {
    console.log(this); // Inherits 'this' from the enclosing scope
    console.log(arguments); // ReferenceError: arguments is not defined in arrow functions
  };
  
  regularFunction.call({ name: 'Regular' }, 1, 2, 3);
  arrowFunction.call({ name: 'Arrow' }, 1, 2, 3);
  