let person1 = 'Shivam';
let person2 = 'raman';
let person3 = 'harkirat';

const names = [person1, person2, person3];

console.log(names[0])

console.log("------------------------------------")

const ages = [21, 22, 23, 24, 25, 26];

for (let i = 0; i < ages.length; i++){
    if(ages[i]%2 ==0){
        console.log(ages[i]);
    }
}