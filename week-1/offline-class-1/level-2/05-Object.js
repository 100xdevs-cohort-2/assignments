// Object Methods Explanation
function objectMethods(obj) {
  console.log("Original Object:", obj);

  // Returns keys from object
  let keys = Object.keys(obj);
  console.log("After Object.keys():", keys);

  // Returns values from object
  let values = Object.values(obj);
  console.log("After Object.values():", values);

  // Returns keys and values from object
  let entries = Object.entries(obj);
  console.log("After Object.entries():", entries);

  // Returns a string representation of an object - array of key value pairs
  let hasProp = obj.hasOwnProperty("key1");
  console.log("After hasOwnProperty():", hasProp);

  // Adds new key value pair to object
  let newObj = Object.assign({}, obj, { newProperty: "newValue" });
  console.log("After Object.assign():", newObj);
}

// Example Usage for Object Methods
const sampleObject = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};

objectMethods(sampleObject);
