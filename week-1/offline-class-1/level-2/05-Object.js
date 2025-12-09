// Object Methods Explanation
function objectMethods(obj) {
  console.log("Original Object:", obj);

  let keys = Object.keys(obj);
  console.log("After Object.keys():", keys); // [key1 , key2, key3]

  let values = Object.values(obj);
  console.log("After Object.values():", values); // [value1 , value2, value3]

  let entries = Object.entries(obj);
  console.log("After Object.entries():", entries); // [['key1','value1'],['key2','value2'],['key3','value3']]

  let hasProp = obj.hasOwnProperty("property");
  console.log("After hasOwnProperty():", hasProp); 

  let newObj = Object.assign({}, obj, { newProperty: "newValue" }); // here we assign new objects 
  // Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.

// @param target — The target object to copy to. ==> {} 

// @param source1 — The first source object from which to copy properties. ==> obj

// @param source2 — The second source object from which to copy properties. ==> {newProperty:"newValue"}
  // it is its syntax 
  console.log("After Object.assign():", newObj);


}

// Example Usage for Object Methods
const sampleObject = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};

objectMethods(sampleObject);
