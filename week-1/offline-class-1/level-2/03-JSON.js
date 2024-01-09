function jsonMethods(jsonString) {
  console.log("Original JSON String:", jsonString);
// Stringifying JavaScript object to JSON string
  let jsonStringified = JSON.stringify(jsonString);
  console.log("After JSON.stringify():", jsonStringified);
  // Parsing JSON string to JavaScript object
  let parsedObject = JSON.parse(jsonStringified);
  console.log("After JSON.parse():", parsedObject);

  
}

// Example Usage for JSON Methods
const sampleJSONString =
  {key: "value", number: 42, nested: {nestedKey: "nestedValue"}};

jsonMethods(sampleJSONString);
