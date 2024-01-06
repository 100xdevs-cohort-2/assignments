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
  const map1 = new Map();
  for (let i = 0; i < transactions.length; i++) {
    const category = transactions[i].category;
    const price = transactions[i].price;
    if (!map1.has(category)) {
      map1.set(category, 0);
    }
    map1.set(category, map1.get(category) + price);
  }

  const ans = [];

  for (const [key, value] of map1) {
    ans.push({ "category": key, "totalSpent": value });
  }
  return ans;
}

module.exports = calculateTotalSpentByCategory;
