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

  let spent = []

  for (let i = 0; i < transactions.length; i++) {
    let price = transactions[i].price;
    let category = transactions[i].category;

    let found = false;

    for (let i = 0; i < spent.length; i++) {
      if (spent[i].category == category) {
        spent[i].totalSpent += price;
        found = true;
        break;
      }
    }
    if (!found) {
      spent.push({ category: category, totalSpent: price });
    }
  }

  return spent;
}

module.exports = calculateTotalSpentByCategory;
