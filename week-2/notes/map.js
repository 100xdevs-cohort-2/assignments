// maps


const input = [1,2,3,4,5];

function transform(i) {
    return i*2;
}
const final = input.map(transform);
console.log(final);

const final2 = input.map((i)=>{return i*2});
console.log(final2);