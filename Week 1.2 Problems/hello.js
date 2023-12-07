let firstname = "Krish";
let age = 19;
let isMarried = false;

console.log(" This person is\t" + firstname + " and his age is\t" + age );

if (age >=18) {
    console.log("His Marriage is Legal ");
}

else {
    console.log("He Is Under Age");
}

if (isMarried) {
    console.log("Happy Married Life");
}

else {
    console.log("Join Marriage Bureau");
}

let answer = 1+2+3+4+5+6+7+8+9+10+11+12+13;

console.log(answer);

let k = 0;
/*
 k = k+1;
 k = k+1;

 k = k+1;

 k = k+1;
*/

for (let i = 0; i <=100; i++) {
    k=k+1;
    console.log(k);

}

let body = "Krish";
let body2 = "Suresher";
let body3 = "Lakhan";

const personArray = ["Krish", "Suresher", "Lakhan"];
const genderArray = ["male", "male", "male"];
console.log(personArray[0]);

const ages = [21,22,23,24,25,26,27,28,29,30];
const numberofpeople = ages.length;
for (let i = 0; i<numberofpeople;i++){
    if (ages[i]%2==0){
        console.log(ages[i]);
    }
}

function sum(a,b){
    return a + b;
}


  