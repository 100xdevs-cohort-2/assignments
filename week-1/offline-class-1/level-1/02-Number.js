// any type of num -> int

function explainParseInt(value) {
  console.log("Original Value:", value);
  let result = parseInt(value);
  console.log("After parseInt:", result);
}

// Example Usage for parseInt
explainParseInt(42);
explainParseInt("42px"); //works when string starts with numeric value
explainParseInt("px 50"); //dosent works when string starts with non numeric value
explainParseInt("3.14");

function explainParseFloat(value) {
  console.log("Original Value:", value);
  let result = parseFloat(value);
  console.log("After parseFloat:", result);
}

// Example Usage for parseFloat
explainParseFloat("3.14");
explainParseFloat("42");
explainParseFloat("42px");
explainParseFloat("0.0314E+2");
explainParseFloat("3.14someRandomStuff");
explainParseFloat("someRandomStuff3.14");
