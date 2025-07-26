//Filter, Map and Arrow Func's

//Arrow Func's are nothing but the functions that are written as ()=>{} unlike our normal function syntax.

// In JS there is a Map function available , which helps us to transform our array into some new Array

const input = [1,2,3,4,5];

//We call the map function on an Array and then it helps us to transform.

const output = input.map((i)=>{
    return i*2;
})

console.log(output);

/**
 * Filter Function
 */

//This is a funtion in which we pass our filtering logic and then expect a filtered output in response

const arr = [1,2,3,4,5];

console.log(arr.filter((n)=>{
    if(n%2==0)
        return true;
    else
        return false;
}));