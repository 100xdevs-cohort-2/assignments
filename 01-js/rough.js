/* Easy Problems 

Q1.

let str1 = "Debit Card" // with spaces input
let str2 = "Bad Credit" // with spaces input

let string1 = str1.toLowerCase().split('').sort().join('');; 
// console.log(string1);
// string1 = string1.join('');
console.log(string1);
let string2 = str2.toLowerCase().split('').sort().join('');;
// console.log(string2);
// string2 = string2.join('');
console.log(string2);

Q2.



const transactions = [
    {
        id: 1,
        timestamp: 1656076800000,
        price: 10,
        category: 'Food',
        itemName: 'Pizza',
    },
    {
        id: 2,
        timestamp: 1656259600000,
        price: 20,
        category: 'Food',
        itemName: 'Burger',
    },
    {
        id: 3,
        timestamp: 1656019200000,
        price: 15,
        category: 'Clothing',
        itemName: 'T-Shirt',
    },
    {
        id: 4,
        timestamp: 1656364800000,
        price: 30,
        category: 'Electronics',
        itemName: 'Headphones',
    },
    {
        id: 5,
        timestamp: 1656364800000,
        price: 60,
        category: 'Electronics',
        itemName: 'Headphones',
    }
]

if(transactions.length === 0){
    return []
  }

  let spent = {};

  transactions.forEach((item) => {
    if(spent[item.category]){
      spent[item.category].totalSpent = spent[item.category].totalSpent + item.price; 
    } else {
      spent[item.category] = {
        category: item.category,
        totalSpent: item.price,
      }
    }
  });

  return Object.values(spent)


Q3.



let numbers = [3, 7, 2, 9, 1];

function findLargestElement(numbers) {
    let largest = numbers[0];
    for(let i=1; i<numbers.length; i++){
        if(numbers[i] > largest){
            largest = numbers[i];
        }
    }
    return largest;
}

console.log(findLargestElement(numbers));
*/


/*
Medium

Q1.



let str = "returns 0 for strings without vowels";

function countVowels(str) {
    let string = str.toLowerCase();
    let vowelsCount = 0;
    for(let i=0; i<string.length; i++){
        if(string[i] === 'a' || string[i] === 'e' || string[i] === 'i' || string[i] === 'o' || string[i] === 'u'){
            vowelsCount += 1;
        }
    }
    return vowelsCount;
}

console.log(countVowels(str));
// console.log(vowelsCount);

Q2.



let str= "Able, was I ere I saw Elba!";
function isPalindrome(str) {
    let isPalindrome = true;
    let specialChar = /[^a-zA-Z0-9\s]/g;
    let string = str.toLowerCase().replace(specialChar, '').split(' ').join('');
    let length = string.length;
    for(let i=0; i<length/2; i++){
            if(string[i] != string[length -1 -i]){
                isPalindrome = false;
            }
    }
    return isPalindrome;
}

console.log(isPalindrome(str));

Q3. 


let n = 1000000000;
function calculateTime(n) {
    let sum = 0;
    let start = Date.now();
    for(let i=1; i<=n; i++){
        sum += i;
    }
    return (Date.now()- start)/1000;
}

let time = calculateTime(n);
console.log(`${time}s`);


Hard 

Q1.



class Animal{
    constructor(name, legCount, speaks){
        this.name = name;
        this.legCount = legCount;
        this.speaks = speaks;
    }

    speak(){
        console.log(`${this.name} make a noise`);
    }
}

const dog = new Animal("lucky", 4, "bark");
const cat = new Animal("ruru", 4, "meow");

dog.speak()
cat.speak()

Q2.

*/

const myArray = [1, 2, 3, 4, 5];

// const x = myArray.splice(2, 2);
myArray[2] = "TSAK"
console.log(`myArray values: ${myArray}`);
// console.log(`variable x value: ${x}`);
