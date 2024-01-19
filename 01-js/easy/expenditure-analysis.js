/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let arr=[];
  let totals=[];
  for (let i=0;i<transactions.length;i++){
    let current=transactions[i];
    if(!totals[current.category]){
      totals[current.category]=current.price;
    }else{
      totals[current.category]+=current.price;
    }
  
  }
  for (const category in totals){
    arr.push({category:category,totalSpent:totals[category]});
  }
return arr;
}

// function calculateTotalSpentByCategory(transactions) {

//   const output = {};

//   transactions.forEach((transac)=>{
//     const category = {};
//     if(transac.category in output){
//       output[transac.category] += transac.price;

//     }
//     else{
//       output[transac.category] =  transac.price;
//     }

//   });

//   const obj = [];
//   for(let ele in output){
//     obj.push({category : ele,totalSpent : output[ele] })};

//     return obj;
  
// }

module.exports = calculateTotalSpentByCategory;
