function mathMethods(value) {
  console.log("Original Value:", value); // 4.56 9 25

  let rounded = Math.round(value);
  console.log("After round():", rounded); // 5 9 25 

  let ceiling = Math.ceil(value);
  console.log("After ceil():", ceiling); // 5 9 25

  let flooring = Math.floor(value);
  console.log("After floor():", flooring); // 4 9 25 

  let randomValue = Math.random();
  console.log("After random():", randomValue); // A random value will generated [0,1)

  let maxValue = Math.max(5, 10, 15);
  console.log("After max():", maxValue); //15 

  let minValue = Math.min(5, 10, 15);
  console.log("After min():", minValue); // 5

  let powerOfTwo = Math.pow(value, 2);
  console.log("After pow():", powerOfTwo); //4.56*4.56 81 625

  let squareRoot = Math.sqrt(value);
  console.log("After sqrt():", squareRoot); // sqrt(4.56) 3 5
}

// Example Usage for Math Methods
mathMethods(4.56);
mathMethods(9);
mathMethods(25);
