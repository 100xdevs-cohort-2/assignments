function jsonMethods(jsonString) {
  console.log("Original JSON String:", jsonString);

  // Parsing JSON string to JavaScript object
  let parsedObject = JSON.parse(jsonString);
  console.log("After JSON.parse():", parsedObject);

  // Stringifying JavaScript object to JSON string
  let jsonStringified = JSON.stringify(parsedObject);
  console.log("After JSON.stringify():", jsonStringified);
}

// Example Usage for JSON Methods
const sampleJSONString =
  '{"key": "value", "number": 42, "nested": {"nestedKey": "nestedValue"}}';

jsonMethods(sampleJSONString);


// //JSON.parse
// const usere= '{"name": "manish", "age": 23,"gender": "male"}'
// console.log(user["gender"]);



// JSON.stringify

const user = {
  name: "manish",
  gender: "male"
}
user["name"] //we can do this 
const finalString = JSON.stringify(user)
console.log(finalString)
console.log(finalString["name"]) // i can't print it's give me undifiend
