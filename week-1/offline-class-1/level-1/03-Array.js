// Array handbook

// Array:   push(), pop(), shift(), unshift(), splice(), slice(),
// concat(), forEach(), map(), filter(), reduce(), find(), sort()

// Run each function to see the output, play and learn by doing.

// push()
function pushExample(arr, element) {
  console.log("Original Array:", arr);

  arr.push(element);
  console.log("After push:", arr);
}
pushExample([1, 2, 3], 4);

// pop()
function popExample(arr) {
  console.log("Original Array:", arr);

  arr.pop();
  console.log("After pop:", arr);
}
popExample([1, 2, 3]);

// shift()
function shiftExample(arr) {
  console.log("Original Array:", arr);

  arr.shift();
  console.log("After shift:", arr);
}
shiftExample([1, 2, 3]);

// unshift()
function unshiftExample(arr, element) {
  console.log("Original Array:", arr);

  arr.unshift(element);
  console.log("After unshift:", arr);
}
unshiftExample([1, 2, 3], 0);

// concat()
function concatExample(arr1, arr2) {
  console.log("Original Arrays:", arr1, arr2);

  let arr3 = arr1.concat(arr2);
  console.log("After concat:", arr3);
}
concatExample([1, 2, 3], [4, 5, 6]);

// forEach()
function forEachExample(arr) {
  console.log("Original Array:", arr);

  arr.forEach(function(item, index) {
    console.log(item, index);
  });
}
forEachExample([1, 2, 3]);

// map()
function mapExample(arr) {
  console.log("Original Array:", arr);

  let newArr = arr.map(function(item) {
    return item * 2;
  });
  console.log("After map:", newArr);
}
mapExample([1, 2, 3]);

// filter()
function filterExample(arr) {
  console.log("Original Array:", arr);

  let newArr = arr.filter(function(item) {
    return item > 3;
  });
  console.log("After filter:", newArr);
}
filterExample([1, 2, 3, 4, 5]);

// find()
function findExample(arr) {
  console.log("Original Array:", arr);

  let found = arr.find(function(item) {
    return item > 3;
  });
  console.log("After find:", found);
}
findExample([1, 2, 3, 4, 5]);

// sort()
function sortExample(arr) {
  console.log("Original Array:", arr);

  arr.sort(function(a, b) {
    return a - b;
  });
  console.log("After sort:", arr);
}
sortExample([5, 2, 3, 4, 1]);


//MY UNDERSTANDING
const three = [1,2,3];

three.forEach((i, item) => {
    console.log(i,item);
})
let add = 1;
three.map((item) => {   //arguments comes from inside, outer arguments cause prob in map function.
    
    console.log(item + add);
    console.log(add);
    
})

three.filter(function (item) {
    if(item % 2 === 0){
    console.log(item)
    }
})

const ans = three.filter(function(item) {
    return item % 2 != 0
})
console.log(ans)

const ans1 = three.reduce((result, item) => {
    console.log(result)
   return result + item  //0+1=1, 1+2=3, 3+3 = 6   return statement is necessary here if u want final result that is 6
}, 0)//this sets the result to 0
 console.log(ans1)

 three.reduce(function (result, item) {
     result =  result + item;  //1+0= 1, 3, 6 
     console.log(result);
 },0)

 //some, if any item in entire array meets a certain condition
 const negnum = three.some(function(item){
    return item > 0;   //answers in true or false
 })
 console.log(negnum)

 //every, if all follows certain condition or not
 const everynum = three.every(function(item){
    return item > 0 && item%2 == 0;   //answers in true or false
 })
 console.log(everynum)

 //find, a single element is found here and it return that

 const findnum = three.find(function(item){
    return item===4;
 })
 console.log(findnum);

 const object1 = [{  //array of object ,, all these methods are applicable only on arrays, arrays of object but not on strings
  id: 'a'
 },
{
    id: 'b'
}]
 const findnum1 = object1.find(function(item){
    return item.id==='b'
 })
 console.log(findnum1)

 // console.log(findnum1)
//namearr()  //namearr() is not defined
the()   //its able to run since things r not local(block scope) here

//LOOP IMPORTANT CONCEPTS
let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]


// Log out the items in the myLeads array using a for loop
function loop(){
myLeads.forEach((item) => {
    console.log(item);   //yha pe it'll work coz item as input
})
}
loop()

for(let i=0; i<myLeads.length; i++){
    console.log(myLeads[i]);  //item = myLeads[i]  yha pe console.log(item) 
    //will give error coz item u r not taking as arg
}


// 1. Create a variable, listItems, to hold all the HTML for the list items
//Assign it to an empty string to begin with
let listItems = '';
for (let i = 0; i < myLeads.length; i++) {
    // 2. Add the item to the listItems variable instead of the ulEl.innerHTML
    //listItems += myLeads[i];
    
    listItems += "<li>" + myLeads[i] + "</li>"  //no innerHTML REQUIRED HERE KEEP TRACK OF PREVIOUS ONE +=
    console.log(listItems);
}
// 3. Render the listItems inside the unordered list using ulEl.innerHTML
ulEl.innerHTML =  listItems

listItems += `<li> <a href="www.ggogle.com" target="_blank"> ${myLeads[i]} </a> </li>`  //2nd way

// HINTS:
// localStorage.setItem(key, value)
// localStorage.getItem(key)
// localStorage.clear()
// PS: both key and value need to be strings

let myLeads = `["www.awesomelead.com"]`

// 1. Turn the myLeads string into an array
myLeads = JSON.parse(myLeads)
// 2. Push a new value to the array
myLeads.push("www.lead2.com")
// 3. Turn the array into a string again
myLeads = JSON.stringify(myLeads)
// 4. Console.log the string using typeof to verify that it's a string
console.log(typeof myLeads)

  // Save the myLeads array to localStorage 
    // PS: remember JSON.stringify()
     myLeads = [];
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    
    // To verify that it works:
    console.log( localStorage.getItem("myLeads") )

 localStorage.clear(); //to clear localStorage
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));  //write value here
console.log(leadsFromLocalStorage);   

//Truthy and Falsy value
// const credits = 0

// if (credits) {
//     console.log("Let's play 🎰")
// } else {
//     console.log("Sorry, you have no credits 😭")
// }

// truthy
// falsy
//THESE ARE THE FALSY VALUES OTHER THAN THIS ALL ARE TRUTHY VALUES
// false
// 0
// ""
// null -> how you as a developer signalize emptiness
// undefined -> how JavaScript signalizes emptiness
// NaN

let currentViewers = ["jane"]

console.log(currentViewers[5])

console.log(  Boolean("")   ) // false
console.log(  Boolean("0")  ) // true  O WITH STRING ,0 -> FALSY 
console.log(  Boolean(100)  ) // true
console.log(  Boolean(null) ) // false
console.log(  Boolean([0])  ) // true
console.log(  Boolean(-0)   ) // false

//USE OF TRUTHY AND FALSY
// ["lead1", "lead2"] or null
let leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
console.log(leadsFromLocalStorage)
// 1. Check if leadsFromLocalStorage is truthy
// 2. If so, set myLeads to its value and call renderLeads()

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderLeads()
}

// The generateSentence(desc, arr) takes two parameterer: a description and an array.
// It should return a string based upon the description and array.

// Example 1: if you pass in "largest countries",and ["China", "India", "USA"],
// it should return the string: "The 3 largest countries are China, India, USA"

// Example 2: If you pass in "best fruits" and ["Apples", "Bananas"], it should return:
// "The 2 best fruits are Apples, Bananas"

// Use both a for loop and a template string to solve the challenge
function generateSentence(desc, arr) {
  let baseString = `The ${arr.length} ${desc} are `
  const lastIndex = arr.length - 1
  for (let i = 0; i < arr.length; i++) {
      if (i === lastIndex) {
          baseString += arr[i]
      } else {
          baseString += arr[i] + ", "  
      }
  }
  return baseString
}

const sentence = generateSentence("highest mountains", ["Mount Everest", "K2"])
console.log(sentence)

//PERFORMANCE OPTIMIZE -- MANIPULATING DOM COMES WITH A COST  SO OUTSIDE FOR LOOP ONLY ONCE
const imgs = [
  "images/hip1.jpg",
  "images/hip2.jpg",
  "images/hip3.jpg"
]

const container = document.getElementById("container")

function renderImages() {
  let imgsDOM = ""
  for (let i = 0; i < imgs.length; i++) {
      imgsDOM += `<img class="team-img" src="${imgs[i]}">`
  }
  container.innerHTML = imgsDOM
}

renderImages()

//CONDITIONAL RENDERING IN REACT

export default function Card(props) {
  let badgeText
  if (props.openSpots === 0) {
      badgeText = "SOLD OUT"
  } else if (props.location === "Online") {
      badgeText = "ONLINE"
  }
  return (
    <div className="card">
        {badgeText && <div className="card--badge">{badgeText}</div>}

  )
  }