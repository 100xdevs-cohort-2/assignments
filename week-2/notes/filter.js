// Filtering a array 

const arr = [1,2,3,4,5];

function filterLogic(n) {
    if (n%2 == 0){
        return true;
    } else {
        return false;
    }
}

const final = arr.filter(filterLogic);
console.log(final);