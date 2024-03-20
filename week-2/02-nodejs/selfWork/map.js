let array = [3, 5, 7, 8];
let doubledArray = array.map((n) => {
    return n*2;
});
let multipleOfFour = doubledArray.filter((n) => {
    if(n % 4 === 0){
        return n;
    }
});
console.log(doubledArray);
console.log(multipleOfFour);