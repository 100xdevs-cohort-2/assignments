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
  const l = transactions.length;
  let ans = [];
  let temp = new Map();

  for(let i=0;i<l;i++){
    temp.set(transactions[i].category, 0)
  }
  
  for(let i=0;i<l;i++){
    temp.set(transactions[i].category, temp.get(transactions[i].category)+transactions[i].price)
  }

  let n = temp.size;

  temp.forEach (function(value, key) {
    ans.push({"category": key,"totalSpent": value});
  })

  return ans;
}

module.exports = calculateTotalSpentByCategory;
