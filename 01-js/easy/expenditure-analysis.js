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
   // return [];
  let spend = {};
  for (let i = 0; i < transactions.length; i++) {
    let t = transactions[i];
    if (spend[t.category]) {
      spend[t.category] += t.price; 
    }else{
      spend[t.category] = 0;
      spend[t.category] += t.price;
    }
  }
  let keys = Object.keys(spend);
let ans = [];
for (let i = 0; i < keys.length; i++) {
  const category = keys[i];
  let obj = {
    category : category,
    totalSpent : spend[category],
  }
  ans.push(obj);
}
  return ans;
}

module.exports = calculateTotalSpentByCategory;
