function explainParseInt(value) {
  console.log("Original Value:", value); 
  // 42 42px 3.14
  let result = parseInt(value);
  console.log("After parseInt:", result); // 42 42 3
}

// Example Usage for parseInt
explainParseInt("42");
explainParseInt("42px");
explainParseInt("3.14");

function explainParseFloat(value) {
  console.log("Original Value:", value);
  let result = parseFloat(value);
  console.log("After parseFloat:", result); // 3.14 42 42
}

// Example Usage for parseFloat
explainParseFloat("3.14");
explainParseFloat("42");
explainParseFloat("42px");
