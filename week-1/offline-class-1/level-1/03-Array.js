// push()   --> add an element to the end of an array
function pushExample(arr, element) {
  console.log("Original Array:", arr);

  arr.push(element);
  console.log("After push:", arr);
}
pushExample([1, 2, 3], 4);

// pop()  --> removes the last element from the array
function popExample(arr) {
  console.log("Original Array:", arr);

  arr.pop();
  console.log("After pop:", arr);
}
popExample([1, 2, 3]);

// shift() --> removes the first element from the array
function shiftExample(arr) {
  console.log("Original Array:", arr);

  arr.shift();
  console.log("After shift:", arr);
}
shiftExample([1, 2, 3]);

// unshift() --> add an element to the beginning of an array
function unshiftExample(arr, element) {
  console.log("Original Array:", arr);

  arr.unshift(element);
  console.log("After unshift:", arr);
}
unshiftExample([1, 2, 3], 0);

// concat() --> joins two or more arrays
function concatExample(arr1, arr2) {
  console.log("Original Arrays:", arr1, arr2);

  let arr3 = arr1.concat(arr2);
  console.log("After concat:", arr3);
}
concatExample([1, 2, 3], [4, 5, 6]);

/*-------------------------------------------------*/

// forEach() --> executes a provided function once for each array element
//expects function as an argument (callback)

function getIndex(item, index) {
  console.log(`item : ${item} - index : ${index}`);
}

function forEachExample(arr) {
  console.log("Original Array:", arr);
  //arr.forEach(fn)
  arr.forEach(getIndex);
}
forEachExample([1, 2, 3]);

// map() --> creates a new array with the results of calling a provided function on every element in the calling array

function makeItThrice(item) {
  return item * 3;
}
function mapExample(arr) {
  console.log("Original Array:", arr);

  let newArr = arr.map(makeItThrice);
  console.log("After map:", newArr);
}
mapExample([1, 2, 3]);

// filter() --> creates a new array with all elements that pass the test implemented by the provided function

function isGreaterOrNot(item) {
  return item > 3;
}

function filterExample(arr) {
  console.log("Original Array:", arr);

  let newArr = arr.filter(isGreaterOrNot);
  console.log("After filter:", newArr);
}
filterExample([1, 2, 3, 4, 5]);

// find()  --> returns the value of the first element in the array that satisfies the provided testing function

function isGreaterOrNot(item) {
  return item > 3;
}

function findExample(arr) {
  console.log("Original Array:", arr);

  let found = arr.find(isGreaterOrNot);
  console.log("After find:", found);
}
findExample([1, 2, 3, 4, 5]);

// sort() --> sorts the elements of an array in place and returns the sorted array

// imp function for sorting
function sortHelper(a, b) {
  return a - b;
}

function sortExample(arr) {
  console.log("Original Array:", arr);

  arr.sort(sortHelper);
  console.log("After sort:", arr);
}
sortExample([5, 2, 3, 4, 1]);
