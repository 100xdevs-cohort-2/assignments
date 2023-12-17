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
  const ans = [];
  const map = new Map();
  for (let i = 0; i < transactions.length; i++) {
    const { category, price } = transactions[i];
    let currPrice = price;
    if(map.has(category)) {
      currPrice = map.get(category);
      currPrice += price;
    }
    map.set(category, currPrice);
  }
  for(const [key, value] of map){
    ans.push({"category": key, "totalSpent": value});
  }
  return ans;
}

module.exports = calculateTotalSpentByCategory;
