function powerOf(n, power){
    let result = 1;
    for(let i = 0; i < power; i++){
        result *= n;
    }
    return result;
}

function sumOfSomething([a,powerA],[b,powerB],fn){
    let sum = fn(a,powerA) + fn(b,powerB);
    return sum;
}


let n = sumOfSomething([10,2],[10,1],powerOf);
console.log(n);