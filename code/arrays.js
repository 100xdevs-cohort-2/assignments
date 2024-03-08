
const initialArray=[1,2,3,4]
function pushExample(arr,elm){
    arr.push(elm);
    console.log(arr)
}

pushExample(initialArray,5)

function popExample(arr,elm){
    arr.pop(elm)
    console.log(arr)
}

popExample(initialArray,5)

function shiftArray(arr){
    arr.shift();
    console.log(arr)
}
shiftArray([1, 2, 3]);

function unshiftArray(arr,elm){
    arr.unshift(elm)
    console.log(arr)
}
unshiftArray([1, 2, 3],4);