//Javascript is loosely typed or dynamically typed
//To handle the above issue typescript came into the picture
console.log("Hello Vansh");

//Multithreaded Languages -> Java , C++ , Rust
//Singlethreaded Languages -> Javascript etc

/** 
 * Number of cores means number of processes that you can run at the same time but it is not necessary that
only that many processes will run which many cores are there this is due to the fact that there is a 
conecpt of Context Switching
 * In Javascript as it uses a single core at a time so it is said to be a bad language so scalable system
 * But to handle the above issue there is a fix known as clusterization
*/

/**
 * Ways to define a variable in java is let,var,const
 * let and var can be defined and changed
 * const can not be changed later on
 */

var a = 1;
a=2;
console.log(a);

/**
 * There are majorly three types of datatypes in JS , String , Number and Boolean
 */

let firstName = "Vansh";
let age = 24;
let isMarried = false;

console.log("Hi my name is "+firstName+". My age is "+age)

/**
 * if else example
 */

if(isMarried)
{
    console.log("He is married!!");
}
else
{
    console.log("He is not married!!!");
}

/**
 * Loops in Javascript
 * for
 * while
 * do while
 * for of -> Same as for each in java just syntax differs
 * for in -> Used to loop through properties of an object
 */

for(let i=0;i<=3;i++)
{
    console.log(i);
}

console.log("---------------");

let j=0;
while(j<3){
    console.log(j);
    j++;
}

console.log("---------------");

let k=0;
do{
    console.log("Hi");
    k++;
}while(k<=2)

console.log("---------------");

let l=[1,2,3,4];
for(const itr of l)
{
    console.log(itr);
}

console.log("---------------");

let obj = {name : "Vansh",age:"24"};

for(const key in obj)
{
    console.log("Keys are "+key);
}

console.log("---------------");

let sum =0;

//Bounty Question
//To check the Processes Consumption on windows use the below command on powershell
//Get-Counter -Counter "\Processor(*)\% Processor Time"


// for(let i=0;i<1000000000000;i++)
// {
//     sum+=i;
// }

// console.log(sum);
/**
 * Few Practice Array Questions
 * Program to Print all even numbers in an array
 * Program to print the biggest number in an array
 * Program to print all the male people's first name given a complex object
 * Program that reverses all the elements of an array
 */

//Solution
// First Question

const nums = [1,2,3,4,5,6,7,8,9,10];
console.log(nums);

for(let i=0;i<nums.length;i++)
{
    if(nums[i]%2==0)
        console.log(nums[i]);
}

console.log("---------------");

//Second Question

let maxNum = nums[0];
for(let i=1;i<nums.length;i++)
{
    if(nums[i]>maxNum)
        maxNum = nums[i];
}

console.log("Maximum is "+maxNum);

console.log("---------------");

//Third Question

/**
 * In Javascript there can be complex objects
 * And we can fetch the data of any field using these complex objects
 */

const users = [{
    name:"Vansh",
    age:24,
    metaData:{
        isMarried:true,
        marriedTo:"Vaishnavi"
    }
},{
    name:"Vaishnavi",
    age:25,
    metaData:{
        isMarried:true,
        marriedTo:"Vansh"
    }
},{
    name:"Bubu",
    age:22,
    metaData:{
        isMarried:true,
        marriedTo:"Dudu"
    }
}]

for(let i =0;i<users.length;i++)
{
    if(users[i]["age"]>=24 && users[i]["metaData"]["isMarried"])
    {
        console.log(users[i]["name"]+" is Married.");
    }
    else
    {
        console.log(users[i]["name"]+" is Married is a very small age!!!")
    }
}

console.log("---------------");

//Fourth Question
let lengthOfArray = nums.length;
for(let i=0;i<lengthOfArray/2;i++)
{
    let temp = nums[i];
    nums[i]=nums[lengthOfArray-1-i];
    nums[lengthOfArray-1-i]=temp;
}

console.log(nums);

console.log("---------------");

/**
 * Functions in Javascript
 * Abstract out logic in our program
 * Take arguments as an input
 * Return a value as an output
 * We can think of them as an independent program that is supposed to do something given an input
 * Functions can take other functions as input (callback)
 */

//Callback Functions

function executeOperation(a,b,operationToexecute)
{
    return operationToexecute(a,b)
}

function add(a,b)
{
    return a+b;
}

function subtract(a,b)
{
    return a-b;
}

console.log(executeOperation(1,2,add));