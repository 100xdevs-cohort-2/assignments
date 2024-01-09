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
  const map = new Map();
  transactions.forEach(element => {
    if(map.has(element.category)){
      map.set(element.category, map.get(element.category) + element.price);
    }
    else map.set(element.category , element.price);
  });
  console.log(map);
  const ans = [];
  map.forEach((value,key)=>{
    ans.push({category : key , totalSpent : value});
  });
  return ans;
}
// let a = calculateTotalSpentByCategory([{
//   id: 1,
//   timestamp: 1656076800000,
//   price: 10,
//   category: 'Food',
//   itemName: 'Pizza',
// }]);
// console.log(a);
module.exports = calculateTotalSpentByCategory;
